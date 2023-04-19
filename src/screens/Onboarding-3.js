import Layout from '@components/Layout';
import Onboard from '@components/Onboard';
import imageOnboarding from '@assets/onboarding3.png'

const OnboardingThree = ({ navigation }) => {
   const handleNextClick = () => {
      navigation.navigate('Login');
   };

   return (
      <Layout>
         <Onboard
            title="Intercambio de tarjetas"
            image={imageOnboarding}
            onNextClick={handleNextClick}
            isLastScreen
         >
            Importa y exporta tus tarjetas para facilitar su intercambio entre otras personas.
         </Onboard>
      </Layout>
   );
};

export default OnboardingThree;
