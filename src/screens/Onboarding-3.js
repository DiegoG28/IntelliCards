import Layout from '@components/Layout';
import Onboard from '@components/Onboard';

const OnboardingThree = ({ navigation }) => {
   const handleNextClick = () => {
      navigation.navigate('Login');
   };

   return (
      <Layout>
         <Onboard
            title="Intercambio de tarjetas"
            onNextClick={handleNextClick}
            isLastScreen
         >
            Importa y exporta tus tarjetas para facilitar su intercambio entre otras personas.
         </Onboard>
      </Layout>
   );
};

export default OnboardingThree;
