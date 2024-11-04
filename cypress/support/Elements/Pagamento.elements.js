export const PagementosElemens = {
    CPF:'#input_frm\\:usuario',
    Senha:'#input_frm\\:senha',
    BotãoEntrar: '#frm\\:btnEntrar',
    BotãoBeneficiários: '#dtLj_idt8\\:j_idt27',
    SelectBeneficiário: '#j_idt8\\:j_idt29 > a',
    BotãoNovoBeneficiário:'#form\\:j_idt105 > .ui-button-text',
    FormCPF:'#form\\:tabView\\:accord\\:cpf',
    FormmeNome: '#form\\:tabView\\:accord\\:nome',
    FormeNomeMãe: '#form\\:tabView\\:accord\\:nomeMae',
    FormDatadeNascimento:'#form\\:tabView\\:accord\\:dtNascim_input',
    FormSexobtn: '#form\\:tabView\\:accord\\:sexo_label',
    Página: '.ui-datepicker-current-day > .ui-state-default',

    getSexo(number){
      return `#form\\:tabView\\:accord\\:sexo_${number}`
    }, 

    FormMunibtn: '#form\\:tabView\\:accord\\:municipio2_label',

    getMunicipio(number){
        return `#form\\:tabView\\:accord\\:municipio2_${number}`
    },

    FormCEP: '#form\\:tabView\\:accord\\:cep',
    FormEndereço: '#form\\:tabView\\:accord\\:endereco',
    FormNumeroEndereço:'#form\\:tabView\\:accord\\:numero',
    FormComplemento:'#form\\:tabView\\:accord\\:complemento',
    FormBairrro:'#form\\:tabView\\:accord\\:bairro',
    AbaOrgão: '[aria-expanded="false"] > a',
    BotãoAddOrgão: '#form\\:tabView\\:btOrgaoPagador > .ui-button-text',
    BotãoSelOrgão:'#j_idt261\\:orgPagador_label',

    SelOrgão(number){
     return `#j_idt261\\:orgPagador_${number}`
    },
    AdicionarOrgão: '#j_idt261\\:btAdicionarOrgaoPagador > .ui-button-text',
    SalvarOrgão: '#form\\:saveBtn > .ui-button-text'
    
}