export enum TrafficFlag {
  DEFAULT = 0,
  WEEK_CALLS = 1,
  WEEK_DUR = 2,
  WEEKS_CALLS = 3,
  WEEKS_DUR = 4,
  MONTH_CALLS = 5,
  MONTH_DUR = 6,
}

/*export interface ITraffic {
  week_calls : object[];
  week_dur : object[];
  weeks_calls : object[];
  weeks_dur : object[];
  month_calls : object[];
  month_dur : object[];
}*/

export class TrafficData {
  /*default : object = {
      chartType: 'ColumnChart',
      dataTable: [
        ['data', 'Inbound', 'Outbound', 'Totale'],
        ['Mer 10, Gen', 0,0, 0],
        ['Mar 9, Gen', 0,0, 0],
        ['Lun 8, Gen', 0, 0, 0],
        ['Dom 7, Gen', 0, 0, 0],
        ['Sab 6, Gen', 0, 0, 0],
        ['Ven 5, Gen', 0, 0, 0],
        ['Gio 4, Gen', 0, 0, 0]
      ],
      options: {
        backgroundColor: 'trasparent',
        height: 300,
        animation:{
          duration: 1000,
          easing: 'out',
          startup: true
        }
      }
  };*/
    
  week_calls : object;
  week_dur : object;
  weeks_calls : object;
  weeks_dur : object ;
  month_calls : object;
  month_dur : object;
}