import './specialisation.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import LanguageIcon from '@mui/icons-material/Language';
import TerminalIcon from '@mui/icons-material/Terminal';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import DoubleArrowIcon from '@mui/icons-material/DoubleArrow';
import Grid from '@mui/material/Grid';

const listOfSpecialities = [
  {
    id: 1,
    icons: [<LanguageIcon sx={{fontSize:"150%"}}/>, <DoubleArrowIcon sx={{fontSize:"150%"}}/>],
    title : 'Web Applications',
    description : 'Objectively productivate interoperable process improvements after team building testing procedures. Distinctively architect resource-leveling portals.'
  }, 
  {
    id: 2,
    icons: [<TerminalIcon sx={{fontSize:"150%"}}/>, <DoubleArrowIcon sx={{fontSize:"150%"}}/>],
    title: 'Software Development',
    description: 'Objectively productivate interoperable process improvements after team building testing procedures. Distinctively architect resource-leveling portals.'
  },
  {
    id: 3,
    icons: [<BusinessCenterIcon sx={{fontSize:"150%"}}/>, <DoubleArrowIcon sx={{fontSize:"150%"}}/>], 
    title: 'Software and Business',
    description: 'Objectively productivate interoperable process improvements after team building testing procedures'
  }
]

export default function Raitings () {
  //function to generate cards 
  const generateCards = listOfSpecialities.map ((card) => {
    return (
      <Grid item key={card.id} xs={12} md={6} lg={4}> 
        <Card sx={{ 
          minWidth: 275, 
          m:3, 
          pt: 4,
          pb: 2,
          borderRadius: '40px',
          backgroundColor:'#22346a', 
          color:'#f2b891' }}>
          <CardContent>
            <Typography color='#e3e2cb'> {card.icons} </Typography>
            <Typography variant="h4" component="div" color="#ed9b63" sx={{pb:2}}>
              {card.title}
            </Typography>
            <Typography variant="body2">
              {card.description}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    )
  })
  return (
    <div className="specialisation">
      <div className="specialisation--title"> 
        <h1> How We Can Help </h1> 
      </div>
      <Grid container> 
        {generateCards}
      </Grid>
    </div>
  );
}