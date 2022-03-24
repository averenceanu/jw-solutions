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
    id: 3,
    icons: [<TerminalIcon sx={{fontSize:"200%"}} key={'TerminalIcon'}/>, <DoubleArrowIcon sx={{fontSize:"200%"}} key={'DoubleArrowIcon'}/>],
    title: 'Software Development',
    description: 'We are dedicated to helping you with the most demanding software development and integration tasks. We got the skilled professionals to find the solution, be it System Engineering, Cloud Computing Skills, Data Structures or Algorithms.'
  },
  {
    id: 2,
    icons: [<BusinessCenterIcon sx={{fontSize:"200%"}} key={''}/>, <DoubleArrowIcon sx={{fontSize:"200%"}} key={'DoubleArrowIcon'}/>], 
    title: 'Business Process Automatisation',
    description: "BPA often requires connecting multiple enterprise information technology systems and becomes complex quickly. By delegating this convoluted, nonetheless important task to us, you can focus on growing your business while we tailor solutions specifically to your company's needs."
  },
  {
    id: 1,
    icons: [<LanguageIcon sx={{fontSize:"200%"}} key={'LanguageIcon'}/>, <DoubleArrowIcon sx={{fontSize:"200%"}} key={'DoubleArrowIcon'}/>],
    title : 'Web Development',
    description : "Our Web Developers build web experiences that are feature-packed, digitally transformative and performing. A company's website has a crucial impact on its' customer value; let us bring the best from yours."
  }, 
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
    <div className="specialisation" id='specialisation'>
      <div className="specialisation--title"> 
        <h1> How We Can Help </h1> 
      </div>
      <Grid container> 
        {generateCards}
      </Grid>
    </div>
  );
}