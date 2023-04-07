import Layout from '../components/Layout';
import Onboard from '@components/Onboard';

const OnboardingOne = ({ navigation }) => {
   const handleNextClick = () => {
      navigation.navigate('OnboardingTwo');
   };

   return (
      <Layout>
         <Onboard
            title="Autocompletado de información sobre músculos"
            onNextClick={handleNextClick}
         >
            Crea tarjetas escribiendo únicamente el músculo que quieras
            estudiar. Nosotros haremos el resto por ti.
         </Onboard>
      </Layout>
   );
};

export default OnboardingOne;
