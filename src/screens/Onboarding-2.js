import Layout from '@components/Layout';
import Onboard from '@components/Onboard';
import imageOnboarding from '@assets/onboarding2.png';

const OnboardingTwo = ({ navigation }) => {
   const handleNextClick = () => {
      navigation.navigate('OnboardingThree');
   };

   return (
      <Layout>
         <Onboard
            title="Organización de tarjetas"
            image={imageOnboarding}
            onNextClick={handleNextClick}
         >
            Crea carpetas y organiza tus tarjetas de estudio como más te
            convenga.
         </Onboard>
      </Layout>
   );
};

export default OnboardingTwo;
