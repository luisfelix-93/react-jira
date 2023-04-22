import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';
import axios from 'axios';

const WorklogForm = () => {
    const [jiraToken, setJiraToken] = useState('');
    const [jiraEmail, setJiraEmail] = useState('');
    const [jiraTaskId, setJiraTaskId] = useState('');
    const [comment, setComment] = useState('');
    const [started, setStarted] = useState('');
    const [timeSpentSeconds, setTimeSpentSeconds] = useState('');

    const handleFormSubmit = (event) =>{
        event.preventDefault();

        const options = {
            url : 'http:localhost:3000/add-worklog',
            method : 'POST',
            headers : {
                'Authorization': `Basic ${Buffer.from(`${jiraEmail}:${jiraToken}`).toString('base64')}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data : {
                comment,
                started,
                timeSpentSeconds
            },
        };

        axios(options)
            .then((response) => {
                console.log(response);
                alert('Worklog registrado com sucesso!');
            })
            .catch((error) =>{
                console.error(error);
                alert('Não foi possível registrar o worklog.', error);
            });
    };
  return (
    <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId='formJiraToken'>
            <Form.Label>Jira Token</Form.Label>
            <Form.Control
            type='text'
            placeholder='Digite o Jira Token'
            value={jiraToken}
            onChange={(event) => setJiraToken(event.target.value)}
            />
        </Form.Group>

        <Form.Group controlId='formJiraEmail'>
            <Form.Label>Email da Conta do Jira</Form.Label>
            <Form.Control
            type='email'
            placeholder='Digite o email da conta do Jira'
            value={jiraEmail}
            onChange={(event) => setJiraEmail(event.target.value)}
            />
        </Form.Group>

        <Form.Group controlId='formJiraTaskId'>
            <Form.Label>Jira Task Issue</Form.Label>
            <Form.Control
            type='text'
            placeholder='Digite o número do chamado do Jira'
            value={jiraTaskId}
            onChange={(event) => setJiraTaskId(event.target.value)}
            />
        </Form.Group>

        <Form.Group controlId='formComments'>
            <Form.Label>Comentários</Form.Label>
            <Form.Control
            as='textarea'
            placeholder='Digite um comentário sobre a ação no chamado'
            value={comment}
            onChange={(event) => setComment(event.target.value)}
            />
        </Form.Group>
        
        <Form.Group controlId='formDateStarted'>
            <Form.Label>Data de início da tarefa</Form.Label>
            <Form.Control
            as='dataSet'
            placeholder='Selecione a data de início da tarefa'
            value={started}
            onChange={(event) => setStarted(event.target.value)}
            />
        </Form.Group>

        <Form.Group controlId='formTimeSpent'>
            <Form.Label>Tempo Gasto no Chamado</Form.Label>
            <Form.Control
            type='text'
            placeholder='Digite quanto tempo foi gasto no chamado'
            value={timeSpentSeconds}
            onChange={(event) => setTimeSpentSeconds(event.target.value)}
            />
        </Form.Group>
    </Form>
  )
}

export default WorklogForm