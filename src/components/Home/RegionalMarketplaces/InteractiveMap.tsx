import { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import { useTranslation } from 'react-i18next';
import L, { Layer, PathOptions } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import latinamericaGeoJSON from '@/data/latinamerica-hq';
import { externalLinks } from '@/lib/externalLinks';

interface InteractiveMapProps {
  activeCountry: string | null;
  setActiveCountry: (country: string | null) => void;
}

// Component to handle map interactions and synchronization
function MapController({ activeCountry }: { activeCountry: string | null }) {
  const map = useMap();
  const geoJsonLayerRef = useRef<L.GeoJSON | null>(null);

  useEffect(() => {
    if (!activeCountry || !map) return;

    // Find the layer for the active country and highlight it
    if (geoJsonLayerRef.current) {
      geoJsonLayerRef.current.eachLayer((layer: Layer) => {
        const featureLayer = layer as L.Path & { feature?: { properties?: { id?: string } } };
        if (featureLayer.feature?.properties?.id === activeCountry) {
          featureLayer.setStyle({
            fillColor: '#EF7D00',
            fillOpacity: 1,
            weight: 2,
            color: '#1F2937'
          });
        } else {
          featureLayer.setStyle({
            fillColor: '#6B7280',
            fillOpacity: 1,
            weight: 1,
            color: '#1F2937'
          });
        }
      });
    }
  }, [activeCountry, map]);

  // Store reference to GeoJSON layer
  useEffect(() => {
    map.eachLayer((layer) => {
      if (layer instanceof L.GeoJSON) {
        geoJsonLayerRef.current = layer;
      }
    });
  }, [map]);

  return null;
}

const InteractiveMap = ({ activeCountry, setActiveCountry }: InteractiveMapProps) => {
  const { t } = useTranslation();
  const [, setMapReady] = useState(false);

  // Available countries in our platform
  const availableCountries = [
    'mexico', 'brazil', 'ecuador', 'chile', 'guatemala', 'bolivia',
    'panama', 'costarica', 'colombia', 'peru', 'argentina', 'uruguay',
    'paraguay', 'elsalvador'
  ];

  // Get country name from translation
  const getCountryName = (countryId: string): string => {
    const countryKey = countryId === 'costarica' ? 'costaRica' : countryId === 'elsalvador' ? 'elSalvador' : countryId;
    return t(`countries.${countryKey}`, countryId.toUpperCase());
  };

  // Style for each country feature
  const getFeatureStyle = (feature: any): PathOptions => {
    const countryId = feature.properties.id;
    const isAvailable = availableCountries.includes(countryId);
    const isActive = activeCountry === countryId;

    return {
      fillColor: isActive ? '#EF7D00' : isAvailable ? '#6B7280' : '#374151',
      fillOpacity: 1,
      weight: isActive ? 2 : 1,
      color: '#1F2937',
      opacity: 1,
      ...(isAvailable && { cursor: 'pointer' })
    };
  };

  // Handle mouse events on features
  const onEachFeature = (feature: any, layer: L.Layer) => {
    const countryId = feature.properties.id;
    const isAvailable = availableCountries.includes(countryId);

    if (!isAvailable) return;

    const featureLayer = layer as L.Path;

    // Bind tooltip
    const countryName = getCountryName(countryId);
    featureLayer.bindTooltip(countryName, {
      permanent: false,
      direction: 'top',
      className: 'country-tooltip',
      offset: [0, -10]
    });

    // Mouse events
    featureLayer.on({
      mouseover: (e: L.LeafletMouseEvent) => {
        const target = e.target as L.Path;
        target.setStyle({
          fillColor: '#EF7D00',
          fillOpacity: 1,
          weight: 2
        });
        setActiveCountry(countryId);
        target.openTooltip();
      },
      mouseout: (e: L.LeafletMouseEvent) => {
        const target = e.target as L.Path;
        if (activeCountry !== countryId) {
          target.setStyle({
            fillColor: '#6B7280',
            fillOpacity: 1,
            weight: 1
          });
          setActiveCountry(null);
        }
        target.closeTooltip();
      },
      click: () => {
        const url = externalLinks.countries[countryId];
        if (url) {
          window.open(url, '_blank');
        } else {
          setActiveCountry(activeCountry === countryId ? null : countryId);
        }
      }
    });
  };

  return (
    <div className="relative w-full h-full bg-construex-dark">
      <MapContainer
        center={[-5, -75]}
        zoom={3.2}
        minZoom={3}
        maxZoom={6}
        zoomControl={false}
        scrollWheelZoom={false}
        dragging={true}
        doubleClickZoom={false}
        style={{ height: '100%', width: '100%', background: '#1e2530' }}
        whenReady={() => setMapReady(true)}
      >
        {/* Dark tile layer */}
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />

        {/* GeoJSON layer for countries */}
        <GeoJSON
          data={latinamericaGeoJSON as any}
          style={getFeatureStyle}
          onEachFeature={onEachFeature}
        />

        {/* Map controller for external state sync */}
        <MapController activeCountry={activeCountry} />
      </MapContainer>
    </div>
  );
};

export default InteractiveMap;
