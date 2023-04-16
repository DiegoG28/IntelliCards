import Layout from '@components/Layout';
import Onboard from '@components/Onboard';

const OnboardingTwo = ({ navigation }) => {
   const handleNextClick = () => {
      navigation.navigate('OnboardingThree');
   };

   return (
      <Layout>
         <Onboard
            title="Organización de tarjetas"
            onNextClick={handleNextClick}
         >
            Crea carpetas y organiza tus tarjetas de estudio como más te convenga.
         </Onboard>
      </Layout>
   );
};

export default OnboardingTwo;
