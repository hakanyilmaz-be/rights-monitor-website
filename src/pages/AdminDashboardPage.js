
import { Container } from 'react-bootstrap'
import FetchCSVData from '../components/charts/fetchCSVData'
import HeaderKitlesel from '../components/text-header/headerKitlesel'
import FlourishEmbedKitlesel from '../components/flourish/FlourishEmbedKitlesel'
import LookerStudioIframeKitleselAdvancedData from '../components/locker-studio/LookerStudioIframeKitleselAdvancedData'
import KitleselGiris from '../components/paragraflar/kitlesel-giris'
import KitleselIller from '../components/charts/kitlesel/kitlesel-iller'


const AdminDashboardPage = () => {


 
  return (
    <Container>

      <HeaderKitlesel/>
      <FlourishEmbedKitlesel/>
      <div style={{ height: '30px' }}></div>
      <KitleselGiris/>
      <div style={{ height: '30px' }}></div>

      <KitleselIller/>

      <LookerStudioIframeKitleselAdvancedData/>
      <div style={{ height: '700px' }}></div>


      <FetchCSVData/>
    </Container>
  )
}

export default AdminDashboardPage