import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificaoService } from 'src/app/notificao.service';
import { ProdutoService } from 'src/app/produto.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';

@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {
  produto: IProduto | undefined;
  qtde=1;
  
  constructor(
    private produtosService: ProdutoService,
    private route: ActivatedRoute,
    private notifca: NotificaoService,
    private carrinhoService: CarrinhoService
  ){}
  
  ngOnInit(): void{
    const routeParams = this.route.snapshot.paramMap;
    const produtoId = Number(routeParams.get("id"));
    this.produto = this.produtosService.getOne(produtoId);
  }
  
  addAoCarrinho(){
    this.notifca.notifcar("O produto foi add ao carrinho");
    const produto: IProdutoCarrinho ={
      ...this.produto!,
      qtde: this.qtde
    }
    this.carrinhoService.addAoCarrinho(produto);
  }
}