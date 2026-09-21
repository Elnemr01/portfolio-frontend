import { getAllProjectsFn } from '@/services/projects/services'
import { useQuery } from '@tanstack/react-query'

const useGetProjects = (data) => {
    const {data : projects, isLoading, isError, error} = useQuery({
        queryKey: ['projects',data.page],
        queryFn: ()=> getAllProjectsFn(data.page),
        enabled: data.inView,
    })

    return {projects, isLoading, isError, error}
}

export default useGetProjects