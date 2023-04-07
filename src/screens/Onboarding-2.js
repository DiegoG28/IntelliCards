import Layout from '@components/Layout';
import Onboard from '@components/Onboard';

const OnboardingTwo = ({ navigation }) => {
   const handleNextClick = () => {
      navigation.navigate('OnboardingThree');
   };

   return (
      <Layout>
         <Onboard
            title="Autocompletado de información sobre músculos"
            onNextClick={handleNextClick}
         >
            Crea tarjetas escribiendo únicamente el músculo que quieras
            estudiar. Nosotros haremos el resto por ti. 2
         </Onboard>
      </Layout>
   );
};

export default OnboardingTwo;
