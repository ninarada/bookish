
interface Params {
    subject: string;
}

export default function BrowseSubject({ params }: { params: Params }) {
    return (
        <main>
            <p>This is {params.subject} page.</p>
        </main>
      )
}