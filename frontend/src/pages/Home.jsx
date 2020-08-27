import {useEffect} from 'react';
// import ImageGallery from 'react-image-gallery';
import { useHistory } from 'react-router-dom';

export default function Home() {

    // const images = [
    //     {
    //         original: 'https://picsum.photos/id/1018/1000/300/',
    //         thumbnail: 'https://picsum.photos/id/1018/250/150/',
    //     },
    //     {
    //         original: 'https://picsum.photos/id/1015/1000/300/',
    //         thumbnail: 'https://picsum.photos/id/1015/250/150/',
    //     },
    //     {
    //         original: 'https://picsum.photos/id/1019/1000/300/',
    //         thumbnail: 'https://picsum.photos/id/1019/250/150/',
    //     },
    // ];

    // const properties = {
    //     showThumbnails: false,
    //     showPlayButton: false,
    //     showNav: true,
    //     items: images,
    //     showFullscreenButton: false,
    //     autoPlay: false,
    //     slideInterval: 3500,
    // };
    // return (
    //     <div className="home">
    //         <ImageGallery {...properties} />
    //     </div>
    // )


    const history = useHistory();

    useEffect(() => {
        history.push("/category/5e9392bb8213516b835c04e8");
    }, [history])
    return null
}
