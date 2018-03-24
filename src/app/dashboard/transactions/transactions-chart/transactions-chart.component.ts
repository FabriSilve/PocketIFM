import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Transaction } from '../../../model/transaction';

@Component({
  selector: 'transactions-chart',
  templateUrl: './transactions-chart.component.html',
  styleUrls: ['./transactions-chart.component.css']
})
export class TransactionsChartComponent implements OnInit {

  public chartFlag : number = 1;
  private chartSize : number;

  @Input() public transaction : Transaction;
  private compositionQnt : object;
  private compositionDur : object;
  private compositionCost : object;

  ngOnChanges(changes : SimpleChanges) {
    this.drawChart(changes.transaction.currentValue);
  }

  ngOnInit() {
    this.drawChart(this.transaction);
  }

  private drawChart(transaction : Transaction ) : void {
    //todo refactoring
    if(transaction == null) return;
    this.compositionQnt = this.drawSignleChart(
      transaction.inNaz_Qnt,transaction.inMob_Qnt,
      transaction.inInt_Qnt,transaction.outNaz_Qnt,
      transaction.outMob_Qnt,transaction.outInt_Qnt);

    this.compositionDur = this.drawSignleChart(
      transaction.inNaz_Dur,transaction.inMob_Dur,
      transaction.inInt_Dur,transaction.outNaz_Dur,
      transaction.outMob_Dur,transaction.outInt_Dur);

    this.compositionCost = this.drawSignleChart(
      transaction.inNaz_Cost,transaction.inMob_Cost,
      transaction.inInt_Cost,transaction.outNaz_Cost,
      transaction.outMob_Cost,transaction.outInt_Cost);
  }

  private drawSignleChart(inNaz : number, inMob : number, inInt : number, outNaz : number, outMob  : number, outInt  : number) : any {
    return {
      chartType: 'PieChart',
      dataTable: [
        ['Composizione', 'Hours per Day'],
        ['In Fisso', inNaz],
        ['In Mobile', inMob],
        ['In Inter', inInt],
        ['Out Fisso', outNaz],
        ['Out Mobile', outMob],
        ['Out Inter', outInt],
      ],
      options: {
        backgroundColor: 'trasparent',
        width: this.chartSize, height: this.chartSize,
        //is3D: true,
        fontSize: 18,
        legend: 'none',//{position: 'bottom', textStyle: {color: 'blue', fontSize: 16}},
        pieSliceText: 'label',
        chartArea:{left:'5%',top:'5%',bottom:'5%',right: '5%',},
        slices: {
          0: { color: '#0174DF' },
          1: { color: '#2E9AFE' },
          2: { color: '#81BEF7' },
          3: { color: '#00BFFF' },
          4: { color: '#58D3F7' },
          5: { color: '#00BFFF' }
        },
      }
    };
  }

  constructor() {
    if (screen.availWidth <= 640) { 
      this.chartSize = screen.availWidth*0.90;
    } else if (screen.availWidth > 640 && screen.availWidth < 768){ 
      this.chartSize = screen.availWidth*0.70;
    } else if(screen.availWidth >= 768 && screen.availWidth < 1024){
      this.chartSize = screen.availWidth*0.45;
    } else if(screen.availWidth >= 1024){
      this.chartSize = screen.availWidth*0.3;
    }
   }

}
