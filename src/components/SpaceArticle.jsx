import { useEffect,useState } from "react";
import  {Card,Button} from 'react-bootstrap'


const SpaceArticle = () => {
    const[article,setArticle] = useState <Result[]>([])
    useEffect(() => {
        fetch('https://api.spaceflightnewsapi.net/v4/articles')
        .then((res) => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error('errore brutto brutto nella fetch!')
        }
      })
      .then((data) => {
        // data è l'array di prenotazioni
        setArticle(data)
      })
      .catch((err) => {
        console.log('ERRORE', err)
      })
  }, [])
  return (
    <div>
        {article.map((i) =>{
            return (
                <Card key={i.id}>
                    <CardImg variant="top" src ={i.image_url}/>
                    <CardBody>
                        <CardTitle>é{i.title}</CardTitle>
                        <Button variant="warning">more</Button>
                    </CardBody>
                </Card>
            )
        })}
    </div>
  )

    }
    export default SpaceArticle 
