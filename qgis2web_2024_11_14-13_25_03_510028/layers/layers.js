var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Positronretina_1 = new ol.layer.Tile({
            'title': 'Positron (retina)',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}@2x.png'
            })
        });
var format_CountyBoundariesMercatorshp_2 = new ol.format.GeoJSON();
var features_CountyBoundariesMercatorshp_2 = format_CountyBoundariesMercatorshp_2.readFeatures(json_CountyBoundariesMercatorshp_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountyBoundariesMercatorshp_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountyBoundariesMercatorshp_2.addFeatures(features_CountyBoundariesMercatorshp_2);
var lyr_CountyBoundariesMercatorshp_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CountyBoundariesMercatorshp_2, 
                style: style_CountyBoundariesMercatorshp_2,
                popuplayertitle: "County Boundaries Mercator.shp",
                interactive: true,
                title: '<img src="styles/legend/CountyBoundariesMercatorshp_2.png" /> County Boundaries Mercator.shp'
            });
var format_HIFLD_3 = new ol.format.GeoJSON();
var features_HIFLD_3 = format_HIFLD_3.readFeatures(json_HIFLD_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HIFLD_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HIFLD_3.addFeatures(features_HIFLD_3);
var lyr_HIFLD_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HIFLD_3, 
                style: style_HIFLD_3,
                popuplayertitle: "HIFLD ",
                interactive: true,
                title: '<img src="styles/legend/HIFLD_3.png" /> HIFLD '
            });
var format_PSC_4 = new ol.format.GeoJSON();
var features_PSC_4 = format_PSC_4.readFeatures(json_PSC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PSC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PSC_4.addFeatures(features_PSC_4);
var lyr_PSC_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PSC_4, 
                style: style_PSC_4,
                popuplayertitle: "PSC",
                interactive: true,
                title: '<img src="styles/legend/PSC_4.png" /> PSC'
            });
var format_SanLouisValley_5 = new ol.format.GeoJSON();
var features_SanLouisValley_5 = format_SanLouisValley_5.readFeatures(json_SanLouisValley_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SanLouisValley_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SanLouisValley_5.addFeatures(features_SanLouisValley_5);
var lyr_SanLouisValley_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SanLouisValley_5, 
                style: style_SanLouisValley_5,
                popuplayertitle: "San Louis Valley",
                interactive: true,
                title: '<img src="styles/legend/SanLouisValley_5.png" /> San Louis Valley'
            });
var format_HostingCapacity_6 = new ol.format.GeoJSON();
var features_HostingCapacity_6 = format_HostingCapacity_6.readFeatures(json_HostingCapacity_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HostingCapacity_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HostingCapacity_6.addFeatures(features_HostingCapacity_6);
var lyr_HostingCapacity_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HostingCapacity_6, 
                style: style_HostingCapacity_6,
                popuplayertitle: "Hosting Capacity",
                interactive: true,
                title: '<img src="styles/legend/HostingCapacity_6.png" /> Hosting Capacity'
            });
var format_COTransmissionshp_7 = new ol.format.GeoJSON();
var features_COTransmissionshp_7 = format_COTransmissionshp_7.readFeatures(json_COTransmissionshp_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_COTransmissionshp_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_COTransmissionshp_7.addFeatures(features_COTransmissionshp_7);
var lyr_COTransmissionshp_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_COTransmissionshp_7, 
                style: style_COTransmissionshp_7,
                popuplayertitle: "CO Transmission.shp",
                interactive: true,
                title: '<img src="styles/legend/COTransmissionshp_7.png" /> CO Transmission.shp'
            });
var format_XCELTargetSubsshp_8 = new ol.format.GeoJSON();
var features_XCELTargetSubsshp_8 = format_XCELTargetSubsshp_8.readFeatures(json_XCELTargetSubsshp_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_XCELTargetSubsshp_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_XCELTargetSubsshp_8.addFeatures(features_XCELTargetSubsshp_8);
var lyr_XCELTargetSubsshp_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_XCELTargetSubsshp_8, 
                style: style_XCELTargetSubsshp_8,
                popuplayertitle: "XCEL Target Subs.shp",
                interactive: true,
                title: '<img src="styles/legend/XCELTargetSubsshp_8.png" /> XCEL Target Subs.shp'
            });
var format_CODGleads_9 = new ol.format.GeoJSON();
var features_CODGleads_9 = format_CODGleads_9.readFeatures(json_CODGleads_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CODGleads_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CODGleads_9.addFeatures(features_CODGleads_9);
var lyr_CODGleads_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CODGleads_9, 
                style: style_CODGleads_9,
                popuplayertitle: "CO DG - leads",
                interactive: true,
                title: '<img src="styles/legend/CODGleads_9.png" /> CO DG - leads'
            });
var format_Inactive_10 = new ol.format.GeoJSON();
var features_Inactive_10 = format_Inactive_10.readFeatures(json_Inactive_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Inactive_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Inactive_10.addFeatures(features_Inactive_10);
var lyr_Inactive_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Inactive_10, 
                style: style_Inactive_10,
                popuplayertitle: "Inactive",
                interactive: true,
                title: '<img src="styles/legend/Inactive_10.png" /> Inactive'
            });
var format_ActiveConversation_11 = new ol.format.GeoJSON();
var features_ActiveConversation_11 = format_ActiveConversation_11.readFeatures(json_ActiveConversation_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ActiveConversation_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ActiveConversation_11.addFeatures(features_ActiveConversation_11);
var lyr_ActiveConversation_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ActiveConversation_11, 
                style: style_ActiveConversation_11,
                popuplayertitle: "Active Conversation",
                interactive: true,
                title: '<img src="styles/legend/ActiveConversation_11.png" /> Active Conversation'
            });
var format_SiteLeaseOption_12 = new ol.format.GeoJSON();
var features_SiteLeaseOption_12 = format_SiteLeaseOption_12.readFeatures(json_SiteLeaseOption_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SiteLeaseOption_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SiteLeaseOption_12.addFeatures(features_SiteLeaseOption_12);
var lyr_SiteLeaseOption_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SiteLeaseOption_12, 
                style: style_SiteLeaseOption_12,
                popuplayertitle: "Site Lease Option",
                interactive: true,
                title: '<img src="styles/legend/SiteLeaseOption_12.png" /> Site Lease Option'
            });
var group_Opportunities = new ol.layer.Group({
                                layers: [lyr_Inactive_10,lyr_ActiveConversation_11,lyr_SiteLeaseOption_12,],
                                fold: "open",
                                title: "Opportunities "});
var group_Leads = new ol.layer.Group({
                                layers: [lyr_CODGleads_9,],
                                fold: "open",
                                title: "Leads"});
var group_PowerInfrastructure = new ol.layer.Group({
                                layers: [lyr_HostingCapacity_6,lyr_COTransmissionshp_7,lyr_XCELTargetSubsshp_8,],
                                fold: "open",
                                title: "Power Infrastructure "});
var group_Territory = new ol.layer.Group({
                                layers: [lyr_HIFLD_3,lyr_PSC_4,lyr_SanLouisValley_5,],
                                fold: "open",
                                title: "Territory "});
var group_BaseMaps = new ol.layer.Group({
                                layers: [lyr_GoogleSatelliteHybrid_0,lyr_Positronretina_1,lyr_CountyBoundariesMercatorshp_2,],
                                fold: "open",
                                title: "Base Maps"});

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_Positronretina_1.setVisible(true);lyr_CountyBoundariesMercatorshp_2.setVisible(true);lyr_HIFLD_3.setVisible(true);lyr_PSC_4.setVisible(true);lyr_SanLouisValley_5.setVisible(true);lyr_HostingCapacity_6.setVisible(true);lyr_COTransmissionshp_7.setVisible(true);lyr_XCELTargetSubsshp_8.setVisible(true);lyr_CODGleads_9.setVisible(true);lyr_Inactive_10.setVisible(true);lyr_ActiveConversation_11.setVisible(true);lyr_SiteLeaseOption_12.setVisible(true);
var layersList = [group_BaseMaps,group_Territory,group_PowerInfrastructure,group_Leads,group_Opportunities];
lyr_CountyBoundariesMercatorshp_2.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_HIFLD_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'ID': 'ID', 'NAME': 'NAME', 'ADDRESS': 'ADDRESS', 'CITY': 'CITY', 'STATE': 'STATE', 'ZIP': 'ZIP', 'TELEPHONE': 'TELEPHONE', 'TYPE': 'TYPE', 'COUNTRY': 'COUNTRY', 'NAICS_CODE': 'NAICS_CODE', 'NAICS_DESC': 'NAICS_DESC', 'SOURCE': 'SOURCE', 'SOURCEDATE': 'SOURCEDATE', 'VAL_METHOD': 'VAL_METHOD', 'VAL_DATE': 'VAL_DATE', 'WEBSITE': 'WEBSITE', 'REGULATED': 'REGULATED', 'CNTRL_AREA': 'CNTRL_AREA', 'PLAN_AREA': 'PLAN_AREA', 'HOLDING_CO': 'HOLDING_CO', 'SUMMR_PEAK': 'SUMMR_PEAK', 'WINTR_PEAK': 'WINTR_PEAK', 'SUMMER_CAP': 'SUMMER_CAP', 'WINTER_CAP': 'WINTER_CAP', 'NET_GEN': 'NET_GEN', 'PURCHASED': 'PURCHASED', 'NET_EX': 'NET_EX', 'RETAIL_MWH': 'RETAIL_MWH', 'WSALE_MWH': 'WSALE_MWH', 'TOTAL_MWH': 'TOTAL_MWH', 'TRANS_MWH': 'TRANS_MWH', 'CUSTOMERS': 'CUSTOMERS', 'YEAR': 'YEAR', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_PSC_4.set('fieldAliases', {'FID': 'FID', 'OBJECTID': 'OBJECTID', 'COMPID': 'COMPID', 'COMPNAME': 'COMPNAME', 'HOLDINGCO': 'HOLDINGCO', 'HOLDINGID': 'HOLDINGID', 'COMPABRV': 'COMPABRV', 'WEBSITE': 'WEBSITE', 'PHONE': 'PHONE', 'EMAIL': 'EMAIL', 'ADDRESS': 'ADDRESS', 'CITY': 'CITY', 'STATE': 'STATE', 'ZIP': 'ZIP', 'CLRCODE': 'CLRCODE', 'AREASQMI': 'AREASQMI', 'AREASQKM': 'AREASQKM', 'RESREV': 'RESREV', 'RESMWH': 'RESMWH', 'RESCUST': 'RESCUST', 'RESRATE': 'RESRATE', 'COMREV': 'COMREV', 'COMMWH': 'COMMWH', 'COMCUST': 'COMCUST', 'COMRATE': 'COMRATE', 'INDREV': 'INDREV', 'INDMWH': 'INDMWH', 'INDCUST': 'INDCUST', 'INDRATE': 'INDRATE', 'OTHREV': 'OTHREV', 'OTHMWH': 'OTHMWH', 'OTHCUST': 'OTHCUST', 'OTHRATE': 'OTHRATE', 'WHREV': 'WHREV', 'WHMWH': 'WHMWH', 'WHCUST': 'WHCUST', 'WHRATE': 'WHRATE', 'SALEREV': 'SALEREV', 'SALEMWH': 'SALEMWH', 'SALECUST': 'SALECUST', 'SALERATE': 'SALERATE', 'YEAR': 'YEAR', 'COMPTYPE': 'COMPTYPE', 'ServiceAre': 'ServiceAre', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'GIS_contac': 'GIS_contac', 'GIS_cont_1': 'GIS_cont_1', 'Status_id': 'Status_id', 'Shape__Are': 'Shape__Are', 'Shape__Len': 'Shape__Len', });
lyr_SanLouisValley_5.set('fieldAliases', {'STATEFP': 'STATEFP', 'COUNTYFP': 'COUNTYFP', 'COUNTYNS': 'COUNTYNS', 'GEOID': 'GEOID', 'NAME': 'NAME', 'NAMELSAD': 'NAMELSAD', 'LSAD': 'LSAD', 'CLASSFP': 'CLASSFP', 'MTFCC': 'MTFCC', 'CSAFP': 'CSAFP', 'CBSAFP': 'CBSAFP', 'METDIVFP': 'METDIVFP', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', });
lyr_HostingCapacity_6.set('fieldAliases', {'FID': 'FID', 'Id': 'Id', 'MinValue': 'MinValue', 'PhCount': 'PhCount', 'ThreshInVi': 'ThreshInVi', 'Phase': 'Phase', 'Type': 'Type', 'OH_UG': 'OH_UG', 'Voltage': 'Voltage', 'PlanRegion': 'PlanRegion', });
lyr_COTransmissionshp_7.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'ID': 'ID', 'TYPE': 'TYPE', 'STATUS': 'STATUS', 'NAICS_CODE': 'NAICS_CODE', 'NAICS_DESC': 'NAICS_DESC', 'SOURCE': 'SOURCE', 'SOURCEDATE': 'SOURCEDATE', 'VAL_METHOD': 'VAL_METHOD', 'VAL_DATE': 'VAL_DATE', 'OWNER': 'OWNER', 'VOLTAGE': 'VOLTAGE', 'VOLT_CLASS': 'VOLT_CLASS', 'INFERRED': 'INFERRED', 'SUB_1': 'SUB_1', 'SUB_2': 'SUB_2', 'SHAPE__Len': 'SHAPE__Len', 'GlobalID': 'GlobalID', 'Shape__L_1': 'Shape__L_1', });
lyr_XCELTargetSubsshp_8.set('fieldAliases', {'id': 'id', 'name': 'name', 'city': 'city', 'state': 'state', 'zip': 'zip', 'type': 'type', 'status': 'status', 'county': 'county', 'countyfips': 'countyfips', 'country': 'country', 'latitude': 'latitude', 'longitude': 'longitude', 'naics_code': 'naics_code', 'naics_desc': 'naics_desc', 'source': 'source', 'sourcedate': 'sourcedate', 'val_method': 'val_method', 'val_date': 'val_date', 'lines': 'lines', 'max_volt': 'max_volt', 'min_volt': 'min_volt', 'max_infer': 'max_infer', 'min_infer': 'min_infer', 'MV': 'MV', 'Trans': 'Trans', 'Outside': 'Outside', });
lyr_CODGleads_9.set('fieldAliases', {'First Name': 'First Name', 'Last Name': 'Last Name', 'Title': 'Title', 'Company / Account': 'Company / Account', 'Lead Status': 'Lead Status', 'Lead Source': 'Lead Source', 'Site Tier': 'Site Tier', 'Lead Record Type': 'Lead Record Type', 'Market': 'Market', 'Utility': 'Utility', 'Site Address': 'Site Address', 'Site City': 'Site City', 'Site County': 'Site County', 'Site Lat/Long Coordinates (Latitude)': 'Site Lat/Long Coordinates (Latitude)', 'Site Lat/Long Coordinates (Longitude)': 'Site Lat/Long Coordinates (Longitude)', });
lyr_Inactive_10.set('fieldAliases', {'Opportunity Name': 'Opportunity Name', 'Site County': 'Site County', 'Stage': 'Stage', 'Application Electrical Drawing Finalized': 'Application Electrical Drawing Finalized', 'Application Status': 'Application Status', 'Queue Position': 'Queue Position', 'Queue Position Date': 'Queue Position Date', 'System Size (MW AC)': 'System Size (MW AC)', 'Lease Area (Acres or Square Feet)': 'Lease Area (Acres or Square Feet)', 'Pre-Application Report on file?': 'Pre-Application Report on file?', 'Substation': 'Substation', 'Circuit': 'Circuit', 'POI Voltage': 'POI Voltage', 'Distance to Substation': 'Distance to Substation', 'Account Name': 'Account Name', 'Site Municipality': 'Site Municipality', 'PV Inverter Model': 'PV Inverter Model', 'System Size (MW DC)': 'System Size (MW DC)', 'DC/AC Ratio': 'DC/AC Ratio', 'Site Lat/Long Coordinates (Latitude)': 'Site Lat/Long Coordinates (Latitude)', 'Site Lat/Long Coordinates (Longitude)': 'Site Lat/Long Coordinates (Longitude)', 'Utility': 'Utility', });
lyr_ActiveConversation_11.set('fieldAliases', {'Opportunity Name': 'Opportunity Name', 'Site County': 'Site County', 'Stage': 'Stage', 'Application Electrical Drawing Finalized': 'Application Electrical Drawing Finalized', 'Application Status': 'Application Status', 'Queue Position': 'Queue Position', 'Queue Position Date': 'Queue Position Date', 'System Size (MW AC)': 'System Size (MW AC)', 'Lease Area (Acres or Square Feet)': 'Lease Area (Acres or Square Feet)', 'Pre-Application Report on file?': 'Pre-Application Report on file?', 'Substation': 'Substation', 'Circuit': 'Circuit', 'POI Voltage': 'POI Voltage', 'Distance to Substation': 'Distance to Substation', 'Account Name': 'Account Name', 'Site Municipality': 'Site Municipality', 'PV Inverter Model': 'PV Inverter Model', 'System Size (MW DC)': 'System Size (MW DC)', 'DC/AC Ratio': 'DC/AC Ratio', 'Site Lat/Long Coordinates (Latitude)': 'Site Lat/Long Coordinates (Latitude)', 'Site Lat/Long Coordinates (Longitude)': 'Site Lat/Long Coordinates (Longitude)', 'Utility': 'Utility', });
lyr_SiteLeaseOption_12.set('fieldAliases', {'Opportunity Name': 'Opportunity Name', 'Site County': 'Site County', 'Stage': 'Stage', 'Application Electrical Drawing Finalized': 'Application Electrical Drawing Finalized', 'Application Status': 'Application Status', 'Queue Position': 'Queue Position', 'Queue Position Date': 'Queue Position Date', 'System Size (MW AC)': 'System Size (MW AC)', 'Lease Area (Acres or Square Feet)': 'Lease Area (Acres or Square Feet)', 'Pre-Application Report on file?': 'Pre-Application Report on file?', 'Substation': 'Substation', 'Circuit': 'Circuit', 'POI Voltage': 'POI Voltage', 'Distance to Substation': 'Distance to Substation', 'Account Name': 'Account Name', 'Site Municipality': 'Site Municipality', 'PV Inverter Model': 'PV Inverter Model', 'System Size (MW DC)': 'System Size (MW DC)', 'DC/AC Ratio': 'DC/AC Ratio', 'Site Lat/Long Coordinates (Latitude)': 'Site Lat/Long Coordinates (Latitude)', 'Site Lat/Long Coordinates (Longitude)': 'Site Lat/Long Coordinates (Longitude)', 'Utility': 'Utility', });
lyr_CountyBoundariesMercatorshp_2.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'MTFCC': 'TextEdit', 'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'METDIVFP': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_HIFLD_3.set('fieldImages', {'OBJECTID': 'Range', 'ID': 'TextEdit', 'NAME': 'TextEdit', 'ADDRESS': 'TextEdit', 'CITY': 'TextEdit', 'STATE': 'TextEdit', 'ZIP': 'TextEdit', 'TELEPHONE': 'TextEdit', 'TYPE': 'TextEdit', 'COUNTRY': 'TextEdit', 'NAICS_CODE': 'TextEdit', 'NAICS_DESC': 'TextEdit', 'SOURCE': 'TextEdit', 'SOURCEDATE': 'DateTime', 'VAL_METHOD': 'TextEdit', 'VAL_DATE': 'DateTime', 'WEBSITE': 'TextEdit', 'REGULATED': 'TextEdit', 'CNTRL_AREA': 'TextEdit', 'PLAN_AREA': 'TextEdit', 'HOLDING_CO': 'TextEdit', 'SUMMR_PEAK': 'Range', 'WINTR_PEAK': 'Range', 'SUMMER_CAP': 'Range', 'WINTER_CAP': 'TextEdit', 'NET_GEN': 'Range', 'PURCHASED': 'Range', 'NET_EX': 'Range', 'RETAIL_MWH': 'Range', 'WSALE_MWH': 'Range', 'TOTAL_MWH': 'Range', 'TRANS_MWH': 'Range', 'CUSTOMERS': 'Range', 'YEAR': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_PSC_4.set('fieldImages', {'FID': 'TextEdit', 'OBJECTID': 'TextEdit', 'COMPID': 'TextEdit', 'COMPNAME': 'TextEdit', 'HOLDINGCO': 'TextEdit', 'HOLDINGID': 'TextEdit', 'COMPABRV': 'TextEdit', 'WEBSITE': 'TextEdit', 'PHONE': 'TextEdit', 'EMAIL': 'TextEdit', 'ADDRESS': 'TextEdit', 'CITY': 'TextEdit', 'STATE': 'TextEdit', 'ZIP': 'TextEdit', 'CLRCODE': 'TextEdit', 'AREASQMI': 'TextEdit', 'AREASQKM': 'TextEdit', 'RESREV': 'TextEdit', 'RESMWH': 'TextEdit', 'RESCUST': 'TextEdit', 'RESRATE': 'TextEdit', 'COMREV': 'TextEdit', 'COMMWH': 'TextEdit', 'COMCUST': 'TextEdit', 'COMRATE': 'TextEdit', 'INDREV': 'TextEdit', 'INDMWH': 'TextEdit', 'INDCUST': 'TextEdit', 'INDRATE': 'TextEdit', 'OTHREV': 'TextEdit', 'OTHMWH': 'TextEdit', 'OTHCUST': 'TextEdit', 'OTHRATE': 'TextEdit', 'WHREV': 'TextEdit', 'WHMWH': 'TextEdit', 'WHCUST': 'TextEdit', 'WHRATE': 'TextEdit', 'SALEREV': 'TextEdit', 'SALEMWH': 'TextEdit', 'SALECUST': 'TextEdit', 'SALERATE': 'TextEdit', 'YEAR': 'TextEdit', 'COMPTYPE': 'TextEdit', 'ServiceAre': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'GIS_contac': 'TextEdit', 'GIS_cont_1': 'TextEdit', 'Status_id': 'TextEdit', 'Shape__Are': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_SanLouisValley_5.set('fieldImages', {'STATEFP': 'TextEdit', 'COUNTYFP': 'TextEdit', 'COUNTYNS': 'TextEdit', 'GEOID': 'TextEdit', 'NAME': 'TextEdit', 'NAMELSAD': 'TextEdit', 'LSAD': 'TextEdit', 'CLASSFP': 'TextEdit', 'MTFCC': 'TextEdit', 'CSAFP': 'TextEdit', 'CBSAFP': 'TextEdit', 'METDIVFP': 'TextEdit', 'FUNCSTAT': 'TextEdit', 'ALAND': 'TextEdit', 'AWATER': 'TextEdit', 'INTPTLAT': 'TextEdit', 'INTPTLON': 'TextEdit', });
lyr_HostingCapacity_6.set('fieldImages', {'FID': 'TextEdit', 'Id': 'TextEdit', 'MinValue': 'TextEdit', 'PhCount': 'TextEdit', 'ThreshInVi': 'TextEdit', 'Phase': 'TextEdit', 'Type': 'TextEdit', 'OH_UG': 'TextEdit', 'Voltage': 'TextEdit', 'PlanRegion': 'TextEdit', });
lyr_COTransmissionshp_7.set('fieldImages', {'OBJECTID_1': 'Range', 'OBJECTID': 'Range', 'ID': 'TextEdit', 'TYPE': 'TextEdit', 'STATUS': 'TextEdit', 'NAICS_CODE': 'TextEdit', 'NAICS_DESC': 'TextEdit', 'SOURCE': 'TextEdit', 'SOURCEDATE': 'DateTime', 'VAL_METHOD': 'TextEdit', 'VAL_DATE': 'DateTime', 'OWNER': 'TextEdit', 'VOLTAGE': 'Range', 'VOLT_CLASS': 'TextEdit', 'INFERRED': 'TextEdit', 'SUB_1': 'TextEdit', 'SUB_2': 'TextEdit', 'SHAPE__Len': 'TextEdit', 'GlobalID': 'TextEdit', 'Shape__L_1': 'TextEdit', });
lyr_XCELTargetSubsshp_8.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'city': 'TextEdit', 'state': 'TextEdit', 'zip': 'TextEdit', 'type': 'TextEdit', 'status': 'TextEdit', 'county': 'TextEdit', 'countyfips': 'TextEdit', 'country': 'TextEdit', 'latitude': 'TextEdit', 'longitude': 'TextEdit', 'naics_code': 'TextEdit', 'naics_desc': 'TextEdit', 'source': 'TextEdit', 'sourcedate': 'DateTime', 'val_method': 'TextEdit', 'val_date': 'DateTime', 'lines': 'TextEdit', 'max_volt': 'TextEdit', 'min_volt': 'TextEdit', 'max_infer': 'TextEdit', 'min_infer': 'TextEdit', 'MV': 'TextEdit', 'Trans': 'TextEdit', 'Outside': 'TextEdit', });
lyr_CODGleads_9.set('fieldImages', {'First Name': 'TextEdit', 'Last Name': 'TextEdit', 'Title': 'TextEdit', 'Company / Account': 'TextEdit', 'Lead Status': 'TextEdit', 'Lead Source': 'TextEdit', 'Site Tier': 'TextEdit', 'Lead Record Type': 'TextEdit', 'Market': 'TextEdit', 'Utility': 'TextEdit', 'Site Address': 'TextEdit', 'Site City': 'TextEdit', 'Site County': 'TextEdit', 'Site Lat/Long Coordinates (Latitude)': 'TextEdit', 'Site Lat/Long Coordinates (Longitude)': 'TextEdit', });
lyr_Inactive_10.set('fieldImages', {'Opportunity Name': 'TextEdit', 'Site County': 'TextEdit', 'Stage': 'TextEdit', 'Application Electrical Drawing Finalized': 'CheckBox', 'Application Status': 'TextEdit', 'Queue Position': 'TextEdit', 'Queue Position Date': 'TextEdit', 'System Size (MW AC)': 'TextEdit', 'Lease Area (Acres or Square Feet)': 'TextEdit', 'Pre-Application Report on file?': 'CheckBox', 'Substation': 'TextEdit', 'Circuit': 'TextEdit', 'POI Voltage': 'TextEdit', 'Distance to Substation': 'TextEdit', 'Account Name': 'TextEdit', 'Site Municipality': 'TextEdit', 'PV Inverter Model': 'TextEdit', 'System Size (MW DC)': 'TextEdit', 'DC/AC Ratio': 'TextEdit', 'Site Lat/Long Coordinates (Latitude)': 'TextEdit', 'Site Lat/Long Coordinates (Longitude)': 'TextEdit', 'Utility': 'TextEdit', });
lyr_ActiveConversation_11.set('fieldImages', {'Opportunity Name': 'TextEdit', 'Site County': 'TextEdit', 'Stage': 'TextEdit', 'Application Electrical Drawing Finalized': 'CheckBox', 'Application Status': 'TextEdit', 'Queue Position': 'TextEdit', 'Queue Position Date': 'TextEdit', 'System Size (MW AC)': 'TextEdit', 'Lease Area (Acres or Square Feet)': 'TextEdit', 'Pre-Application Report on file?': 'TextEdit', 'Substation': 'TextEdit', 'Circuit': 'TextEdit', 'POI Voltage': 'TextEdit', 'Distance to Substation': 'TextEdit', 'Account Name': 'TextEdit', 'Site Municipality': 'TextEdit', 'PV Inverter Model': 'TextEdit', 'System Size (MW DC)': 'TextEdit', 'DC/AC Ratio': 'TextEdit', 'Site Lat/Long Coordinates (Latitude)': 'TextEdit', 'Site Lat/Long Coordinates (Longitude)': 'TextEdit', 'Utility': 'TextEdit', });
lyr_SiteLeaseOption_12.set('fieldImages', {'Opportunity Name': 'TextEdit', 'Site County': 'TextEdit', 'Stage': 'TextEdit', 'Application Electrical Drawing Finalized': 'CheckBox', 'Application Status': 'TextEdit', 'Queue Position': 'TextEdit', 'Queue Position Date': 'TextEdit', 'System Size (MW AC)': 'TextEdit', 'Lease Area (Acres or Square Feet)': 'TextEdit', 'Pre-Application Report on file?': 'CheckBox', 'Substation': 'TextEdit', 'Circuit': 'TextEdit', 'POI Voltage': 'TextEdit', 'Distance to Substation': 'TextEdit', 'Account Name': 'TextEdit', 'Site Municipality': 'TextEdit', 'PV Inverter Model': 'TextEdit', 'System Size (MW DC)': 'TextEdit', 'DC/AC Ratio': 'TextEdit', 'Site Lat/Long Coordinates (Latitude)': 'TextEdit', 'Site Lat/Long Coordinates (Longitude)': 'TextEdit', 'Utility': 'TextEdit', });
lyr_CountyBoundariesMercatorshp_2.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'COUNTYNS': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'MTFCC': 'no label', 'CSAFP': 'no label', 'CBSAFP': 'no label', 'METDIVFP': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', });
lyr_HIFLD_3.set('fieldLabels', {'OBJECTID': 'no label', 'ID': 'no label', 'NAME': 'no label', 'ADDRESS': 'no label', 'CITY': 'no label', 'STATE': 'no label', 'ZIP': 'no label', 'TELEPHONE': 'no label', 'TYPE': 'no label', 'COUNTRY': 'no label', 'NAICS_CODE': 'no label', 'NAICS_DESC': 'no label', 'SOURCE': 'no label', 'SOURCEDATE': 'no label', 'VAL_METHOD': 'no label', 'VAL_DATE': 'no label', 'WEBSITE': 'no label', 'REGULATED': 'no label', 'CNTRL_AREA': 'no label', 'PLAN_AREA': 'no label', 'HOLDING_CO': 'no label', 'SUMMR_PEAK': 'no label', 'WINTR_PEAK': 'no label', 'SUMMER_CAP': 'no label', 'WINTER_CAP': 'no label', 'NET_GEN': 'no label', 'PURCHASED': 'no label', 'NET_EX': 'no label', 'RETAIL_MWH': 'no label', 'WSALE_MWH': 'no label', 'TOTAL_MWH': 'no label', 'TRANS_MWH': 'no label', 'CUSTOMERS': 'no label', 'YEAR': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_PSC_4.set('fieldLabels', {'FID': 'no label', 'OBJECTID': 'no label', 'COMPID': 'no label', 'COMPNAME': 'no label', 'HOLDINGCO': 'no label', 'HOLDINGID': 'no label', 'COMPABRV': 'no label', 'WEBSITE': 'no label', 'PHONE': 'no label', 'EMAIL': 'no label', 'ADDRESS': 'no label', 'CITY': 'no label', 'STATE': 'no label', 'ZIP': 'no label', 'CLRCODE': 'no label', 'AREASQMI': 'no label', 'AREASQKM': 'no label', 'RESREV': 'no label', 'RESMWH': 'no label', 'RESCUST': 'no label', 'RESRATE': 'no label', 'COMREV': 'no label', 'COMMWH': 'no label', 'COMCUST': 'no label', 'COMRATE': 'no label', 'INDREV': 'no label', 'INDMWH': 'no label', 'INDCUST': 'no label', 'INDRATE': 'no label', 'OTHREV': 'no label', 'OTHMWH': 'no label', 'OTHCUST': 'no label', 'OTHRATE': 'no label', 'WHREV': 'no label', 'WHMWH': 'no label', 'WHCUST': 'no label', 'WHRATE': 'no label', 'SALEREV': 'no label', 'SALEMWH': 'no label', 'SALECUST': 'no label', 'SALERATE': 'no label', 'YEAR': 'no label', 'COMPTYPE': 'no label', 'ServiceAre': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'GIS_contac': 'no label', 'GIS_cont_1': 'no label', 'Status_id': 'no label', 'Shape__Are': 'no label', 'Shape__Len': 'no label', });
lyr_SanLouisValley_5.set('fieldLabels', {'STATEFP': 'no label', 'COUNTYFP': 'no label', 'COUNTYNS': 'no label', 'GEOID': 'no label', 'NAME': 'no label', 'NAMELSAD': 'no label', 'LSAD': 'no label', 'CLASSFP': 'no label', 'MTFCC': 'no label', 'CSAFP': 'no label', 'CBSAFP': 'no label', 'METDIVFP': 'no label', 'FUNCSTAT': 'no label', 'ALAND': 'no label', 'AWATER': 'no label', 'INTPTLAT': 'no label', 'INTPTLON': 'no label', });
lyr_HostingCapacity_6.set('fieldLabels', {'FID': 'no label', 'Id': 'no label', 'MinValue': 'no label', 'PhCount': 'no label', 'ThreshInVi': 'no label', 'Phase': 'no label', 'Type': 'no label', 'OH_UG': 'no label', 'Voltage': 'no label', 'PlanRegion': 'no label', });
lyr_COTransmissionshp_7.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'ID': 'no label', 'TYPE': 'no label', 'STATUS': 'no label', 'NAICS_CODE': 'no label', 'NAICS_DESC': 'no label', 'SOURCE': 'no label', 'SOURCEDATE': 'no label', 'VAL_METHOD': 'no label', 'VAL_DATE': 'no label', 'OWNER': 'no label', 'VOLTAGE': 'no label', 'VOLT_CLASS': 'no label', 'INFERRED': 'no label', 'SUB_1': 'no label', 'SUB_2': 'no label', 'SHAPE__Len': 'no label', 'GlobalID': 'no label', 'Shape__L_1': 'no label', });
lyr_XCELTargetSubsshp_8.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'city': 'no label', 'state': 'no label', 'zip': 'no label', 'type': 'no label', 'status': 'no label', 'county': 'no label', 'countyfips': 'no label', 'country': 'no label', 'latitude': 'no label', 'longitude': 'no label', 'naics_code': 'no label', 'naics_desc': 'no label', 'source': 'no label', 'sourcedate': 'no label', 'val_method': 'no label', 'val_date': 'no label', 'lines': 'no label', 'max_volt': 'no label', 'min_volt': 'no label', 'max_infer': 'no label', 'min_infer': 'no label', 'MV': 'no label', 'Trans': 'no label', 'Outside': 'no label', });
lyr_CODGleads_9.set('fieldLabels', {'First Name': 'no label', 'Last Name': 'no label', 'Title': 'no label', 'Company / Account': 'no label', 'Lead Status': 'no label', 'Lead Source': 'no label', 'Site Tier': 'no label', 'Lead Record Type': 'no label', 'Market': 'no label', 'Utility': 'no label', 'Site Address': 'no label', 'Site City': 'no label', 'Site County': 'no label', 'Site Lat/Long Coordinates (Latitude)': 'no label', 'Site Lat/Long Coordinates (Longitude)': 'no label', });
lyr_Inactive_10.set('fieldLabels', {'Opportunity Name': 'no label', 'Site County': 'no label', 'Stage': 'no label', 'Application Electrical Drawing Finalized': 'no label', 'Application Status': 'no label', 'Queue Position': 'no label', 'Queue Position Date': 'no label', 'System Size (MW AC)': 'no label', 'Lease Area (Acres or Square Feet)': 'no label', 'Pre-Application Report on file?': 'no label', 'Substation': 'no label', 'Circuit': 'no label', 'POI Voltage': 'no label', 'Distance to Substation': 'no label', 'Account Name': 'no label', 'Site Municipality': 'no label', 'PV Inverter Model': 'no label', 'System Size (MW DC)': 'no label', 'DC/AC Ratio': 'no label', 'Site Lat/Long Coordinates (Latitude)': 'no label', 'Site Lat/Long Coordinates (Longitude)': 'no label', 'Utility': 'no label', });
lyr_ActiveConversation_11.set('fieldLabels', {'Opportunity Name': 'no label', 'Site County': 'no label', 'Stage': 'no label', 'Application Electrical Drawing Finalized': 'no label', 'Application Status': 'no label', 'Queue Position': 'no label', 'Queue Position Date': 'no label', 'System Size (MW AC)': 'no label', 'Lease Area (Acres or Square Feet)': 'no label', 'Pre-Application Report on file?': 'no label', 'Substation': 'no label', 'Circuit': 'no label', 'POI Voltage': 'no label', 'Distance to Substation': 'no label', 'Account Name': 'no label', 'Site Municipality': 'no label', 'PV Inverter Model': 'no label', 'System Size (MW DC)': 'no label', 'DC/AC Ratio': 'no label', 'Site Lat/Long Coordinates (Latitude)': 'no label', 'Site Lat/Long Coordinates (Longitude)': 'no label', 'Utility': 'no label', });
lyr_SiteLeaseOption_12.set('fieldLabels', {'Opportunity Name': 'no label', 'Site County': 'no label', 'Stage': 'no label', 'Application Electrical Drawing Finalized': 'no label', 'Application Status': 'no label', 'Queue Position': 'no label', 'Queue Position Date': 'no label', 'System Size (MW AC)': 'no label', 'Lease Area (Acres or Square Feet)': 'no label', 'Pre-Application Report on file?': 'no label', 'Substation': 'no label', 'Circuit': 'no label', 'POI Voltage': 'no label', 'Distance to Substation': 'no label', 'Account Name': 'no label', 'Site Municipality': 'no label', 'PV Inverter Model': 'no label', 'System Size (MW DC)': 'no label', 'DC/AC Ratio': 'no label', 'Site Lat/Long Coordinates (Latitude)': 'no label', 'Site Lat/Long Coordinates (Longitude)': 'no label', 'Utility': 'no label', });
lyr_SiteLeaseOption_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});