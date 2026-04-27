class gerenciadorAluno {
    constructor() {
        this.listaAlunos = []
    }

    setAluno(nome, idade) {
        if (typeof idade == ! 'number || idade <= 0') {
            alert("Erro na idade")
        }
        const nomeExiste = this.listaAlunos.some(ALUNO => aluno.nome.toLowerCase() === novoNome.toLowerCase());
        if (nomeExiste) {
            console.log("Erro, o nome '${ novoNome }' ja existe")
            return
        }

        this.alunos[index].nome = novoNome;
        this.alunos[index].idade = novaIdade;
        console.log(`✅ Dados do aluno atualizados com sucesso para: ${novoNome}, ${novaIdade} anos.`);
    }

    // 5. Remover aluno
    removerAluno(nome) {
        const index = this.alunos.findIndex(aluno => aluno.nome.toLowerCase() === nome.toLowerCase());

        if (index !== -1) {
            this.alunos.splice(index, 1); // Remove 1 elemento a partir do índice encontrado
            console.log(`🗑️ Aluno '${nome}' removido com sucesso.`);
        } else {
            console.log(`❌ Erro: Aluno '${nome}' não encontrado para remoção.`);
        }
    }
}

// ==========================================
// TESTANDO O SISTEMA (Exemplos de uso)
// ==========================================

// Instanciando a classe
const sistema = new GerenciadorAlunos();

// Testando Adicionar e Validações
sistema.adicionarAluno("Carlos Silva", 20);
sistema.adicionarAluno("Ana Maria", 22);
sistema.adicionarAluno("Carlos Silva", 25); // Vai dar erro (Duplicado)
sistema.adicionarAluno("Pedro", -5);        // Vai dar erro (Idade inválida)

// Testando Listagem
sistema.listarAlunos();

// Testando Busca
sistema.buscarAluno("ana maria");
sistema.buscarAluno("João");

// Testando Alteração
sistema.alterarAluno("Carlos Silva", "Carlos Eduardo Silva", 21);
sistema.listarAlunos();

// Testando Remoção
sistema.removerAluno("Ana Maria");
sistema.listarAlunos();