/**
 * Created by hien.pham on 1/25/2017.
 */

import theme from '../../../styles/theme'

export default theme.extend({
  container:{
    flexDirection:'horizontal',
    flex:1
  },
  child:{
    flex:1,
    backgroundColor:'transparent'
  },
  switchContainer:{
    borderRadius:4
  },
  switchChild:{
    flex:1,
    alignContent:'center'
  },
  switchUnSelBg:{
    backgroundColor:'$backgroundColor'
  },
  switchSelBg:{
    backgroundColor:'$componentBgWhite'
  },
  switchTxtUnsel:{
    color:'#f5f5f5'
  },
  switchTxtSel:{
    color: '#C32025'
  }
})