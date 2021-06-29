export default function Comment({item: {id, name, email, body}}) {
    return (
        <div>
            {id}. {name}
            <h5>{email}</h5>
            <p><i>{body}</i></p>
        </div>
    );
}