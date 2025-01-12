
import memoListData from "./memos.json"
function generateRandomId() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const generateSegment = (length) => {
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            result += characters[randomIndex];
        }
        return result;
    };

    // 생성할 ID 형식에 맞게 각 구간을 생성
    const segment1 = generateSegment(5);
    const segment2 = generateSegment(4);
    const segment3 = generateSegment(5);
    const segment4 = generateSegment(4);

    return `${segment1}-${segment2}-${segment3}-${segment4}`;
}

function getCurrentDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}-${month}-${day}`;
}

const init = () =>{
    let data = JSON.parse(JSON.stringify(memoListData)) as Memo[];
    const addMemo= (title:string, description: string) =>{
        let id;
        const dataIdList = data.map(memo => memo.id);
        while( typeof id === "string" && !dataIdList.includes(id)){
            id = generateRandomId();
        }
        data.push({
            id,
            title,
            description,
            createdAt: getCurrentDate(),
            updatedAt:getCurrentDate()
        })
        return data
    }
    const deleteMemo = (id:string) =>{
        data =  data.filter(memo => memo.id !== id)
        return data
    }

    const updateMemo = (id: string, title?: string, description?: string) =>{
        if(!title && !description){
            return data
        }
        const findIndex = data.findIndex(memo => memo.id === id);
        if(findIndex < 0) {
            return data
        }
        data[findIndex] = {
            ...data[findIndex],
            title: title || data[findIndex].title,
            description: description || data[findIndex].description,
            updatedAt: getCurrentDate()
        }
        return data[findIndex]
    }

    const getAllMemo = () =>{
        return data
    }
    const getMemo = (id:string)=>{
        return data.find(memo => memo.id === id)
    }
    return { addMemo , deleteMemo, updateMemo, getAllMemo, getMemo}
}
const mock = init()

export  default mock;