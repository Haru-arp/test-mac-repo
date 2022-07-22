import Farm from '../components/Farm/Farm';
import FarmCollection from '../components/Farm/FarmCollection';
import './Farmpage.scss'
 
 function Farmpage() {
  return (
    <div className="container mx-auto">
      <div className="farm-contents">
        <Farm />
        <FarmCollection />
      </div>
    </div>
  )
 }

 export default Farmpage;