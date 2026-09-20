import { getAllSkillsFn } from '@/services/skills/services'
import { useQuery } from '@tanstack/react-query'

const useGetSkills = (data) => {
    const {data : skills, isLoading, isError, error} = useQuery({
        queryKey: ['skills',data.selectedBtn],
        queryFn: ()=> getAllSkillsFn(data.selectedBtn),
        enabled: data.inView,
    })

    return {skills, isLoading, isError, error}
}

export default useGetSkills