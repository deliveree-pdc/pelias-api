
var text  = require('../../../sanitiser/_text'),
    parser = require('../../../helper/query_parser'),
    delim = ',',
    defaultError = 'invalid param \'text\': text length, must be >0',
    allLayers    = [ 'geoname', 'osmnode', 'osmway', 'admin0', 'admin1', 'admin2', 'neighborhood',
                   'locality', 'local_admin', 'osmaddress', 'openaddresses' ],
    nonAddressLayers = [ 'geoname', 'osmnode', 'osmway', 'admin0', 'admin1', 'admin2', 'neighborhood',
                   'locality', 'local_admin' ],
    defaultParsed=  { },
    defaultClean =  { text: 'test',
                      layers: allLayers,
                      size: 10,
                      details: true,
                      parsed_text: defaultParsed,
                      lat:0,
                      lon:0
                    },
    getTargetLayers = function(query) {
      var address = parser.get_parsed_address(query);
      return address.target_layer;
    };


module.exports = {
  defaultParsed: defaultParsed,
  defaultClean : defaultClean,
  getTargetLayers: getTargetLayers
};
