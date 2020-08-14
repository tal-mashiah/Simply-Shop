import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default function Home() {
    
    const history = useHistory();
    useEffect(() => {
        history.push("/category/5e9392bb8213516b835c04e8");
    }, [history])

    return null;
}
