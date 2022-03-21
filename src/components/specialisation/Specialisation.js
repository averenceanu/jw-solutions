import './specialisation.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LanguageIcon from '@mui/icons-material/Language';
import WebAssetIcon from '@mui/icons-material/WebAsset';
import TerminalIcon from '@mui/icons-material/Terminal';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';

const listOfSpecialities = [
  {
    icons: [<LanguageIcon />, <WebAssetIcon />],
    title : 'Web Applications',
    description : 'Objectively productivate interoperable process improvements after team building testing procedures. Distinctively architect resource-leveling portals.'
  }, 
  {

    icons: [<TerminalIcon />],
    title: 'Software Development',
    description: 'Objectively productivate interoperable process improvements after team building testing procedures. Distinctively architect resource-leveling portals.'
  },
  {
    icons: [<BusinessCenterIcon />, <DoubleArrowIcon />], 
    title: 'Software and Business',
    description: 'Objectively productivate interoperable process improvements after team building testing procedures'
  }
]

export default function Raitings () {
  //function to generate cards 
  const generateCards = listOfSpecialities.map ((card) => {
    return (
      <Card sx={{ minWidth: 275 }}>
          <CardContent>
            {card.icons}
            <Typography variant="h5" component="div">
              {card.title}
            </Typography>
            <Typography variant="body2">
              {card.description}
            </Typography>
          </CardContent>
        </Card>
    )
  })


  return (
    <div className="specialisation">
      <div className="specialisation--title" > 
        <h1> How We Can Help </h1> 
      </div>
      <div classname="specialisation--grid">
        {generateCards}
      </div>
    </div>
  );
}