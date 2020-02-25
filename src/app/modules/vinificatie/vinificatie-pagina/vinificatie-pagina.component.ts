import {Component, OnInit} from '@angular/core';
import {Logboek} from '../../../core/models/logboek.model';
import {Druivensoort} from '../../../core/models/druivensoort.model';
import {Persprogramma} from '../../../core/models/persprogramma.model';
import {Vat} from '../../../core/models/vat.model';
import {DruivensoortService} from '../../../core/services/druivensoort.service';
import {PersprogrammaService} from '../../../core/services/persprogramma.service';
import {VatService} from '../../../core/services/vat.service';
import {SensorService} from '../../../core/services/sensor.service';
import {Sensor} from '../../../core/models/sensor.model';
import {LogboekService} from '../../../core/services/logboek.service';
import {Router} from '@angular/router';
import {ToezichthouderService} from '../../../core/services/toezichthouder.service';
import {Toezichthouder} from '../../../core/models/toezichthouder.model';
import {Wijnsoort} from '../../../core/models/wijnsoort.model';
import {WijnsoortService} from '../../../core/services/wijnsoort.service';

@Component({
  selector: 'app-vinificatie-pagina',
  templateUrl: './vinificatie-pagina.component.html',
  styleUrls: ['./vinificatie-pagina.component.scss']
})
export class VinificatiePaginaComponent implements OnInit {

  logboek: Logboek = new Logboek(0, undefined, undefined, undefined, '', undefined, undefined, undefined, undefined, undefined, false);
  druivensoorten: Druivensoort[];
  persprogrammas: Persprogramma[];
  vaten: Vat[];
  sensorenWithType: Sensor[];
  toezichthouders: Toezichthouder[];
  wijnsoorten: Wijnsoort[];

  sensorenLeeg = false;
  manueel = true;

  constructor(private druivensoortService: DruivensoortService,
              private persprogrammaService: PersprogrammaService,
              private vatService: VatService,
              private logboekService: LogboekService,
              private sensorService: SensorService,
              private toezichthouderService: ToezichthouderService,
              private wijnsoortService: WijnsoortService,
              private router: Router) {
  }

  ngOnInit() {
    this.vulDropdownMenu();
    console.log(this.logboek);
  }

  vulDropdownMenu() {
    this.druivensoortService.getDruivenSoorten().subscribe(druiven => {
      this.druivensoorten = druiven;
    });

    this.persprogrammaService.getPersProgrammas().subscribe(persprogrammas => {
      this.persprogrammas = persprogrammas;
    });

    this.vatService.getVaten().subscribe(vaten => {
      this.vaten = vaten;
    });
    this.toezichthouderService.getToezichthoudersBetweenNowDate().subscribe(toezichthouders => {
      this.toezichthouders = toezichthouders;
    });
    this.wijnsoortService.getWijnsoorten().subscribe(wijnsoorten => {
      this.wijnsoorten = wijnsoorten;
    });
  }

  toonSensors() {
    if (this.logboek.manueel === true) {
      this.manueel = true;
    } else {
      this.manueel = false;
    }
  }

  getSensorWithTypeByVatId(id: number) {
    this.sensorService.getSensorWithTypeByVatId(id).subscribe(sensoren => {
      this.sensorenWithType = sensoren;
      console.log(sensoren);
      if (this.sensorenWithType.length === 0) {
        this.sensorenLeeg = false;
      } else {
        this.sensorenLeeg = true;
      }
    });
  }

  maakLogboekaan() {
    this.logboekService.addLogboek(this.logboek).subscribe(result => {
      console.log('add logboek oke');
    });
    this.sensorService.updateSensorBeschikbaar(this.sensorenWithType).subscribe(res => {
      console.log('sensor update oke');
    });
    // console.log(this.logboek);
    // console.log(this.sensorenWithType);
  }

}
