import { createTheme, ThemeProvider } from '@mui/material/styles';
import styled from './UpBarAwaitOrders.module.css'
import { useState } from 'react';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import "@fontsource/manrope/500.css";
import days30 from '../../../assets/Upbar/30days.svg';
import free from '../../../assets/Upbar/free.svg';
import happy from '../../../assets/Upbar/happy.svg';
import money from '../../../assets/Upbar/money.svg';

const UpBarAwaitOrders = ( ) => {
  const [value, setValue] = useState(0);
  
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value)
  };
  
  
  function samePageLinkNavigation(event) {
    if (
      event.defaultPrevented ||
      event.button !== 0 || // ignore everything but left-click
      event.metaKey ||
      event.ctrlKey ||
      event.altKey ||
      event.shiftKey
    ) {
      return false;
    }
    return true;
  }
  function LinkTab(props) {
    return (
      <Tab
        component="a"
        onClick={(event) => {
          // Routing libraries handle this, you can remove the onClick handle when using them.
          if (samePageLinkNavigation(event)) {
            event.preventDefault();
          }
        }}
        {...props}
      />
    );
  }

  return (
    <ThemeProvider theme={theme}>
       <Box sx={{ 
        width: '100%',
        maxWidth: "100%", 
        bgcolor: 'rgba(37, 47, 61, 1)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons='auto'
          allowScrollButtonsMobile = {true}
          aria-label="scrollable auto tabs example"
          sx={{
            '& .MuiTabs-scroller': {
              '& .MuiTab-root': {
                color: 'rgba(255, 255, 255, 1)',
                fontWeight: '500', 
                fontSize: '12px',
                display: 'flex',
                justifyContent: 'center',
                gap: '50px',
                '&.Mui-selected': {
                  color: 'rgba(255, 255, 255, 1)', 
                  fontWeight: '500', 
                  fontSize: '12px',
                  textDecoration: 'none',
                },
              },
            },
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
            },
          }}
        >
          <LinkTab className={styled.tab} label={<div className={styled.tabLabel}>
                <img src={days30} alt="30 days" style={{ width: '22px', height: '22px'}} />
                30-DAY SATISFACTION GUARANTEE
              </div>} id={0} href="#"/>
          <LinkTab label={<div className={styled.tabLabel}>
                <img src={free} alt="freeDelivery" style={{ width: '22px', height: '22px'}} />
                Free delivery on orders over $40.00
              </div>} id={1} href="#"/>
          <LinkTab label={<div className={styled.tabLabel}>
                <img src={happy} alt="happy" style={{ width: '22px', height: '22px'}} />
                50.000+ HAPPY CUSTOMERS
              </div>} id={2} href="#"/>
          <LinkTab label={<div className={styled.tabLabel}>
                <img src={money} alt="money" style={{ width: '22px', height: '22px'}} />
                100% Money Back Guarantee
              </div>} id={3} href="#"/>
        </Tabs>
      </Box>
    </ThemeProvider>
  )
 

}

const theme = createTheme({
  typography: {
    fontFamily: 'Manrope, sans-serif', // Configura Manrope como la fuente predeterminada
  },
  components: {
    MuiTabs: {
      styleOverrides: {
        indicator: {
          display: 'none', // Oculta la línea debajo de la pestaña seleccionada
        },
      },
    },
  },
});

export default UpBarAwaitOrders;