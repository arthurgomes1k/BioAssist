from django.shortcuts import render

def index(request):
    return render(request, 'bioassist/index.html')

def triagem(request):

    openai.api_key = ''

    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[
            {"role": "system", "content": "Você é um assistente útil."},
            {"role": "user", "content": "Como posso usar o ChatGPT em um projeto meu?"}
        ]
    )

    message = response['choices'][0]['message']['content']
    print(message)

    return render(request, 'bioassist/triagem.html')



