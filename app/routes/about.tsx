import { ClientLoaderFunctionArgs, useLoaderData } from "@remix-run/react"

export function clientLoader({ }: ClientLoaderFunctionArgs) {
    return {
        message: "Data from Client Loader"
    }
}

export default function About() {
    const loaderData = useLoaderData<typeof clientLoader>()

    return (
        <>
            <h1>About</h1>
            <p>{loaderData.message}</p>
        </>
    )
}