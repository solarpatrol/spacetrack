(function(){
  'use strict';

  var baseURL = 'https://www.space-track.org';

  var support = {};

  support.controller = ['basicspacedata', 'expandedspacedata'];
  support.actions = ['query', 'modeldef'];
  support.types = ['tle', 'tle_latest', 'tle_publish', 'omm', 'boxscore', 'satcat', 'launch_site','satcat_change','satcat_debut','decay','tip','csm'];

  support.fields = {};
  support.fields.tle = ["COMMENT", "ORIGINATOR", "NORAD_CAT_ID", "OBJECT_NAME", "OBJECT_TYPE", "CLASSIFICATION_TYPE", "INTLDES", "EPOCH", "EPOCH_MICROSECONDS", "MEAN_MOTION", "ECCENTRICITY", "INCLINATION", "RA_OF_ASC_NODE", "ARG_OF_PERICENTER", "MEAN_ANOMALY", "EPHEMERIS_TYPE", "ELEMENT_SET_NO", "REV_AT_EPOCH", "BSTAR", "MEAN_MOTION_DOT", "MEAN_MOTION_DDOT", "FILE", "TLE_LINE0", "TLE_LINE1", "TLE_LINE2", "OBJECT_ID", "OBJECT_NUMBER"];
  support.fields.tle_latest = ["ORDINAL", "COMMENT", "ORIGINATOR", "NORAD_CAT_ID", "OBJECT_NAME", "OBJECT_TYPE", "CLASSIFICATION_TYPE", "INTLDES", "EPOCH", "EPOCH_MICROSECONDS", "MEAN_MOTION", "ECCENTRICITY", "INCLINATION", "RA_OF_ASC_NODE", "ARG_OF_PERICENTER", "MEAN_ANOMALY", "EPHEMERIS_TYPE", "ELEMENT_SET_NO", "REV_AT_EPOCH", "BSTAR", "MEAN_MOTION_DOT", "MEAN_MOTION_DDOT", "FILE", "TLE_LINE0", "TLE_LINE1", "TLE_LINE2", "OBJECT_ID", "OBJECT_NUMBER"];
  support.fields.tle_publish = ["PUBLISH_EPOCH", "TLE_LINE1", "TLE_LINE2"];
  support.fields.omm = ["CCSDS_OMM_VERS", "COMMENT", "CREATION_DATE", "ORIGINATOR", "OBJECT_NAME", "OBJECT_ID", "CENTER_NAME", "REF_FRAME", "TIME_SYSTEM", "MEAN_ELEMENT_THEORY", "EPOCH", "MEAN_MOTION", "ECCENTRICITY", "INCLINATION", "RA_OF_ASC_NODE", "ARG_OF_PERICENTER", "MEAN_ANOMALY", "EPHEMERIS_TYPE", "CLASSIFICATION_TYPE", "NORAD_CAT_ID", "ELEMENT_SET_NO", "REV_AT_EPOCH", "BSTAR", "MEAN_MOTION_DOT", "MEAN_MOTION_DDOT", "USER_DEFINED_TLE_LINE0", "USER_DEFINED_TLE_LINE1", "USER_DEFINED_TLE_LINE2"];
  support.fields.boxscore = ["COUNTRY", "SPADOC_CD", "ORBITAL_PAYLOAD_COUNT", "ORBITAL_ROCKET_BODY_COUNT", "ORBITAL_DEBRIS_COUNT", "ORBITAL_TOTAL_COUNT", "DECAYED_PAYLOAD_COUNT", "DECAYED_ROCKET_BODY_COUNT", "DECAYED_DEBRIS_COUNT", "DECAYED_TOTAL_COUNT", "COUNTRY_TOTAL"];
  support.fields.satcat = ["INTLDES", "NORAD_CAT_ID", "OBJECT_TYPE", "SATNAME", "COUNTRY", "LAUNCH", "SITE", "DECAY", "PERIOD", "INCLINATION", "APOGEE", "PERIGEE", "COMMENT", "COMMENTCODE", "RCSVALUE", "FILE", "LAUNCH_YEAR", "LAUNCH_NUM", "LAUNCH_PIECE", "CURRENT", "OBJECT_NAME", "OBJECT_ID", "OBJECT_NUMBER"];
  support.fields.launch_site = ["SITE_CODE", "LAUNCH_SITE"];
  support.fields.satcat_change = ["NORAD_CAT_ID", "OBJECT_NUMBER", "CURRENT_NAME", "PREVIOUS_NAME", "CURRENT_INTLDES", "PREVIOUS_INTLDES", "CURRENT_COUNTRY", "PREVIOUS_COUNTRY", "CURRENT_LAUNCH", "PREVIOUS_LAUNCH", "CURRENT_DECAY", "PREVIOUS_DECAY"];
  support.fields.satcat_debut = ["INTLDES", "NORAD_CAT_ID", "SATNAME", "DEBUT", "COUNTRY", "LAUNCH", "SITE", "DECAY", "PERIOD", "INCLINATION", "APOGEE", "PERIGEE", "COMMENT", "COMMENTCODE", "RCSVALUE", "RCSSOURCE", "LAUNCH_YEAR", "LAUNCH_NUM", "LAUNCH_PIECE", "CURRENT", "OBJECT_NAME", "OBJECT_ID", "OBJECT_NUMBER"];
  support.fields.decay = ["NORAD_CAT_ID", "OBJECT_NUMBER", "OBJECT_NAME", "INTLDES", "OBJECT_ID", "RCS", "COUNTRY", "MSG_EPOCH", "DECAY_EPOCH", "SOURCE", "MSG_TYPE", "PRECEDENCE"];
  support.fields.tip = ["NORAD_CAT_ID", "MSG_EPOCH", "INSERT_EPOCH", "DECAY_EPOCH", "WINDOW", "REV", "DIRECTION", "LAT", "LON", "INCL", "NEXT_REPORT", "ID", "HIGH_INTEREST", "OBJECT_NUMBER"];
  support.fields.csm = ["CSM_HEADER_COMMENT","CREATION_DATE","CSM_FOR","CONSTELLATION","MESSAGE_ID","JSPOC_NOTE","TCA","TCA_MILLISECONDS","TCA_FRACTION","MISS_DISTANCE","RELATIVE_SPEED","RADIAL_RANGE","RELATIVE_POSITION_R","RELATIVE_POSITION_T","RELATIVE_POSITION_N","RELATIVE_VELOCITY_R","RELATIVE_VELOCITY_T","RELATIVE_VELOCITY_N","MSGFROM","VERSION","TYPE","SUBJ","CLS","FILE","JSPOC_ID","COMMENT1","OBJECT","SAT1_OBJECT_NAME","SAT1_OBJECT_ID","SAT1_INTLDES","SAT1_OBJECT_TYPE","SAT1_CATALOG_NUM","SAT1_NORAD_CAT_ID","SAT1_OBJECT_NUMBER","SAT1_LAST_ACCPT_OB","SAT1_REC_UPD_INTVL_DC","SAT1_ACT_UPD_INTVL_DC","SAT1_RES_USD_DC","SAT1_OBS_AVAIL_DC","SAT1_OBS_USED_DC","SAT1_APOGEE","SAT1_PERIGEE","SAT1_INCL","SAT1_RCS","SAT1_RMS","SAT1_BAL_COEF","SAT1_EN_DIS_RATE","SAT1_SOL_RAD_COEF","SAT1_GEOPOT_MOD","SAT1_DRAG_MOD","SAT1_LUNAR_SOLAR","SAT1_SOL_RAD_PRES","SAT1_SOL_EARTH_TIDES","SAT1_IN_TRACK_THRUST","SAT1_EFG_X","SAT1_EFG_Y","SAT1_EFG_Z","SAT1_EFG_VX","SAT1_EFG_VY","SAT1_EFG_VZ","SAT1_C11","SAT1_C12","SAT1_C13","SAT1_C14","SAT1_C15","SAT1_C16","SAT1_C17","SAT1_C18","SAT1_C22","SAT1_C23","SAT1_C24","SAT1_C25","SAT1_C26","SAT1_C27","SAT1_C28","SAT1_C33","SAT1_C34","SAT1_C35","SAT1_C36","SAT1_C37","SAT1_C38","SAT1_C44","SAT1_C45","SAT1_C46","SAT1_C47","SAT1_C48","SAT1_C55","SAT1_C56","SAT1_C57","SAT1_C58","SAT1_C66","SAT1_C67","SAT1_C68","SAT1_C77","SAT1_C78","SAT1_C88","COMMENT2","OBJECT2","SAT2_OBJECT_NAME","SAT2_OBJECT_ID","SAT2_INTLDES","SAT2_OBJECT_TYPE","SAT2_CATALOG_NUM","SAT2_NORAD_CAT_ID","SAT2_OBJECT_NUMBER","SAT2_LAST_ACCPT_OB","SAT2_REC_UPD_INTVL_DC","SAT2_ACT_UPD_INTVL_DC","SAT2_RES_USD_DC","SAT2_OBS_AVAIL_DC","SAT2_OBS_USED_DC","SAT2_APOGEE","SAT2_PERIGEE","SAT2_INCL","SAT2_RCS","SAT2_RMS","SAT2_BAL_COEF","SAT2_EN_DIS_RATE","SAT2_SOL_RAD_COEF","SAT2_GEOPOT_MOD","SAT2_DRAG_MOD","SAT2_LUNAR_SOLAR","SAT2_SOL_RAD_PRES","SAT2_SOL_EARTH_TIDES","SAT2_IN_TRACK_THRUST","SAT2_EFG_X","SAT2_EFG_Y","SAT2_EFG_Z","SAT2_EFG_VX","SAT2_EFG_VY","SAT2_EFG_VZ","SAT2_C11","SAT2_C12","SAT2_C13","SAT2_C14","SAT2_C15","SAT2_C16","SAT2_C17","SAT2_C18","SAT2_C22","SAT2_C23","SAT2_C24","SAT2_C25","SAT2_C26","SAT2_C27","SAT2_C28","SAT2_C33","SAT2_C34","SAT2_C35","SAT2_C36","SAT2_C37","SAT2_C38","SAT2_C44","SAT2_C45","SAT2_C46","SAT2_C47","SAT2_C48","SAT2_C55","SAT2_C56","SAT2_C57","SAT2_C58","SAT2_C66","SAT2_C67","SAT2_C68","SAT2_C77","SAT2_C78","SAT2_C88","UPLOAD_EPOCH"];

  support.formats = ['json', 'xml', 'html', 'csv', 'tle', '3le'];

  module.exports = {
    baseURL: baseURL,
    support: support
  };

}());