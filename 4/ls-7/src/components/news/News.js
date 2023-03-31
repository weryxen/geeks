import {useParams} from 'react-router-dom';

function News(props) {
    const params = useParams()

    console.log(useParams)
    return (
        <div>
            <h1>{params.name}</h1>
        </div>
    );
}

export default News;