import { Persona } from 'src/personal/entity/persona.entity';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity('person_register')
export class RegistroLlegada {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({type: 'datetime', default: () => 'CURRENT_TIMESTAMP'})
  dateEvent: Date;

  @Column()
  typeEvent: string;

  @Column()
  personaId: string;

  @ManyToOne(() => Persona, (persona) => persona.registers)
  persona: Persona;
  
}
