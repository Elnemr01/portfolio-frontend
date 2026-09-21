import { getAllSkillsFn } from '@/services/skills/services'
import { useQuery } from '@tanstack/react-query'

const useGetSkills = (data) => {
    const {data : skills, isLoading, isError, error} = useQuery({
        queryKey: ['skills',data.selectedBtn,data.page],
        queryFn: ()=> getAllSkillsFn({type:data.selectedBtn,page:data.page}),
        enabled: data.inView,
    })

    return {skills, isLoading, isError, error}
}

export default useGetSkills