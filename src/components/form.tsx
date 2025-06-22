import { useState } from "react";

export default function FormSubmit() {


    const [answer, setAnswer] = useState('');
    const [error, setError] = useState<Error>(new Error);
    const [status, setStatus] = useState('typing');
    if (status === 'success') {
        return <h1>That's right!</h1>
    }
    const onChangingText = (e) => {
        debugger
        setAnswer(e.target.value);


    }
    async function handleSubmit(e) {
        debugger
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }
    return (
        <>
            <h2>City quiz</h2>
            <p>
                In which city is there a billboard that turns air into drinkable water?
            </p>
            <form onSubmit={handleSubmit}>
                <textarea value={answer}  onChange={onChangingText} disabled={status === 'submitting'}/>
                <br />
                <button disabled={
                    answer.length === 0 ||
                    status === 'submitting'
                }
>
                    Submit
                </button>

                {error !== null &&
                    <p className="Error">
                        {error.message}
                    </p>
                }
            </form>
        </>
    )
    function submitForm(answer) {
        // Pretend it's hitting the network.
        return new Promise<void>((resolve, reject) => {
            setTimeout(() => {
                let shouldError = answer.toLowerCase() !== 'lima'
                if (shouldError) {
                    reject(new Error('Good guess but a wrong answer. Try again!'));
                } else {
                    resolve();
                }
            }, 1500);
        });
}

}