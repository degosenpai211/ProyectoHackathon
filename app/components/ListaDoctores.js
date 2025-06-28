import { useEffect, useState } from 'react';  
import { cargarDoctores } from '../lib/storage';  

export default function ListaDoctores() {  
  const [doctores, setDoctores] = useState([]);  

  useEffect(() => {  
    const init = async () => {  
      const datos = await cargarDoctores();  
      setDoctores(datos);  
    };  
    init();  
  }, []);  

  return (  
    <FlatList  
      data={doctores}  
      renderItem={({ item }) => (  
        <View>  
          <Text>{item.nombre}</Text>  
          <Text>{item.especialidad}</Text>  
        </View>  
      )}  
    />  
  );  
}  