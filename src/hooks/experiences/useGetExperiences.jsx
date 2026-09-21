import { getAllExperiencesFn } from '@/services/experiences/services'
import { useQuery } from '@tanstack/react-query'

const useGetExperiences = (data) => {
    const {data : experiences, isLoading, isError, error} = useQuery({
        queryKey: ['experiences',data.page],
        queryFn: ()=> getAllExperiencesFn(data.page),
        enabled: data.inView,
    })

    return {experiences, isLoading, isError, error}
}

export default useGetExperiences