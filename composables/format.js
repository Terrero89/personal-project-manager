
//converts the id lenght into the desirable length
export function useFormatId(char,firstIdx,lastInx){
    return char.substring(firstIdx,lastInx);
}

// useFormatId(project.id, 15, 20) 