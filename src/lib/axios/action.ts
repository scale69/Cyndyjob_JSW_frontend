"use server"

import instance from "./instance";



export async function fetchPost(pageParam : number){
    try {
        // const res = await instance.get('posts')
        
        const res = await instance.get(`api/posts?pagination[limit]=1&pagination[start]=${pageParam}&sort[0]=createdAt:desc&&populate=deep`)
        // const res = await instance.get(`posts?pagination[limit]=3&pagination[start]=${pageNumber}&sort[0]=createdAt:desc&&populate=*`)
        // const data = await res.data?.data
        const data = await res.data?.data
        console.log({data});
        
        return data
    } catch (error) {
        return console.log(error);
    }
}

export async function getDetailPost(slug : string){
    try {
        // const res = await instance.get('posts')
        
        const res = await instance.get(`api/posts?filters[documentId][$eq]=${slug}&&populate=deep`)
        // const res = await instance.get(`posts?pagination[limit]=3&pagination[start]=${pageNumber}&sort[0]=createdAt:desc&&populate=*`)
        // const data = await res.data?.data
        const data = await res.data?.data
        
        
        return data
    } catch (error) {
        return console.log(error);
    }
}
export async function fetchSearch(query : string, lang : string, vs: string){
    console.log({query, lang, vs});
    
    try {
        // const res = await instance.get('posts')
        
        const res = await instance.get(`api/posts?filters[title][$containsi]=${query}&filters[bahasa][$containsi]=${lang}&filters[category][$containsi]=${vs}&&populate=deep`)
        // const res = await instance.get(`posts?pagination[limit]=3&pagination[start]=${pageNumber}&sort[0]=createdAt:desc&&populate=*`)
        // const data = await res.data?.data
        const data = await res.data?.data
        
        
        return data
    } catch (error) {
        return console.log(error);
    }
}
export async function fetchProfile(){
    try {
        // const res = await instance.get('posts')
        
        const res = await instance.get(`api/profiles?populate=deep`)
        // const res = await instance.get(`posts?pagination[limit]=3&pagination[start]=${pageNumber}&sort[0]=createdAt:desc&&populate=*`)
        // const data = await res.data?.data
        const data = await res.data?.data
        
        
        return data
    } catch (error) {
        return console.log(error);
    }
}


export const fetchPostInfinite = async (url : string) => await instance.get(url).then(res => res.data?.data).catch(error => console.log(error))
// export const filterCategory = async (url : string) => await instance.get(url).then(res => res.data?.data).catch(error => console.log(error))












