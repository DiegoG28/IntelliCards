import Layout from '@components/Layout';
import Onboard from '@components/Onboard';

const OnboardingThree = ({ navigation }) => {
   const handleNextClick = () => {
      navigation.navigate('Login');
   };

   return (
      <Layout>
         <Onboard
            title="Autocompletado de información sobre músculos"
            onNextClick={handleNextClick}
            isLastScreen
         >
            Crea tarjetas escribiendo únicamente el músculo que quieras
            estudiar. Nosotros haremos el resto por ti. 3
         </Onboard>
      </Layout>
   );
};

export default OnboardingThree;
