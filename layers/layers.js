var wms_layers = [];

var lyr_Dcoupmasque_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "Découpé (masque)",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Dcoupmasque_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-19940785.109270, -1643352.819860, 20021887.689052, 11519489.580216]
                            })
                        });
var format_tl_2017_us_state_1 = new ol.format.GeoJSON();
var features_tl_2017_us_state_1 = format_tl_2017_us_state_1.readFeatures(json_tl_2017_us_state_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tl_2017_us_state_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tl_2017_us_state_1.addFeatures(features_tl_2017_us_state_1);
var lyr_tl_2017_us_state_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tl_2017_us_state_1, 
                style: style_tl_2017_us_state_1,
                interactive: true,
                title: '<img src="styles/legend/tl_2017_us_state_1.png" /> tl_2017_us_state'
            });

lyr_Dcoupmasque_0.setVisible(true);lyr_tl_2017_us_state_1.setVisible(true);
var layersList = [lyr_Dcoupmasque_0,lyr_tl_2017_us_state_1];
lyr_tl_2017_us_state_1.set('fieldAliases', {'REGION': 'REGION', 'DIVISION': 'DIVISION', 'STATEFP': 'STATEFP', 'STATENS': 'STATENS', 'GEOID': 'GEOID', 'STUSPS': 'STUSPS', 'NAME': 'State', 'LSAD': 'LSAD', 'MTFCC': 'MTFCC', 'FUNCSTAT': 'FUNCSTAT', 'ALAND': 'ALAND', 'AWATER': 'AWATER', 'INTPTLAT': 'INTPTLAT', 'INTPTLON': 'INTPTLON', 'data_Films 2017': 'Count of films shot in 2017', 'data_Production tax credit/rebate': 'Tax rebate for production expenses (%)', });
lyr_tl_2017_us_state_1.set('fieldImages', {'REGION': 'Hidden', 'DIVISION': 'Hidden', 'STATEFP': 'Hidden', 'STATENS': 'Hidden', 'GEOID': 'Hidden', 'STUSPS': 'Hidden', 'NAME': 'TextEdit', 'LSAD': 'Hidden', 'MTFCC': 'Hidden', 'FUNCSTAT': 'Hidden', 'ALAND': 'Hidden', 'AWATER': 'Hidden', 'INTPTLAT': 'Hidden', 'INTPTLON': 'Hidden', 'data_Films 2017': 'Range', 'data_Production tax credit/rebate': 'Range', });
lyr_tl_2017_us_state_1.set('fieldLabels', {'NAME': 'header label', 'data_Films 2017': 'inline label', 'data_Production tax credit/rebate': 'inline label', });
lyr_tl_2017_us_state_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});