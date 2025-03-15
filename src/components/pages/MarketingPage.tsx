import Divider from '@mui/material/Divider';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';

export default function MarketingPage(props: { disableCustomTheme?: boolean }) {
  return (
     <>
      <div>
        <Divider />
        <Testimonials />
        <Divider />
        <FAQ />
      </div>
     </>
  );
}
