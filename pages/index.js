import GlobalStyle from "./css/GlobalStyle";
import appConfig from "../config.json";
import { Box, Text, Image } from '@skynexui/components';
import { Link } from '@mui/material';

function HomePage() {

    const streamer = "Fayemii";

    return (
    <>
        <GlobalStyle />
        <Box
        styleSheet={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/07/this-is-fine.jpeg)',
          backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
        }}
        >
        <Box
            styleSheet={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: {
              xs: 'column',
              sm: 'row',
            },
            width: '100%', maxWidth: '700px',
            borderRadius: '5px', padding: '32px', margin: '16px',
            boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
            backgroundColor: appConfig.theme.colors.neutrals[700],
            }}
            >
          {/* Grupos */}
            <Box
            as="form"
            styleSheet={{
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px', backgroundColor: appConfig.theme.colors.neutrals[700],
            }}
          >
            <h2>🦊 Grupos Importantes 🦊</h2>
            <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
              {appConfig.name}
            </Text>
            
            <Link 
                href="https://booyah.live/fayemii"
                underline="hover"  
                sx={
                    { mb: 2, pl: 3, pr: 3, pt: 1, pb: 1, border: 1, borderRadius: 2, fontWeight: 'bold', fontsize: "18px"}
                } 
                >
                    Booyah
            </Link>
            

            <Link 
            href="https://chat.whatsapp.com/J634EiIl83Q1Ep3ElycweT"
            underline="hover" 
            sx={
                { mb: 2, pl: 2, pr: 2, pt: 1, pb: 1, border: 1, borderRadius: 2, fontWeight: 'bold', fontsize: "18px"}
                } 
                >
                    Whatsapp
            </Link>

            <Link  
            href="https://discord.gg/67f94pvSJG"
            underline="hover" 
            sx={
                { mb: 2, pl: 3, pr: 3, pt: 1, pb: 1, border: 1, borderRadius: 2, fontWeight: 'bold', fontsize: "18px"}
                } 
                >
                    Discord
            </Link>


            </Box>
          {/* Grupos */}


          {/* Streamer */}
            <Box
            styleSheet={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              maxWidth: '200px',
              padding: '16px',
              backgroundColor: appConfig.theme.colors.neutrals[800],
              border: '1px solid',
              borderColor: appConfig.theme.colors.neutrals[999],
              borderRadius: '10px',
              flex: 1,
              minHeight: '240px',
            }}
            >
            <Image
              styleSheet={{
                borderRadius: '50%',
                marginBottom: '16px',
              }}
              src={`https://resmambet-a.akamaihd.net/mambet-storage/Web/Avatar/67222172/image-1642544682867.jpeg`}
            />
            <Text
              variant="body4"
              styleSheet={{
                color: appConfig.theme.colors.neutrals[200],
                backgroundColor: appConfig.theme.colors.neutrals[900],
                padding: '3px 10px',
                borderRadius: '1000px'
              }}
            >
              {streamer}
            </Text>
          </Box>

          {/* Streamer */}

        </Box>
      </Box>
    </>
    );
  }
  
export default HomePage;  