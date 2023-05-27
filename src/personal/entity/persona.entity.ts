import { RegistroLlegada } from 'src/registro-ingreso/entity/registroLlegadas.entity';
import { Column, Entity, PrimaryColumn, OneToMany } from 'typeorm';

@Entity('person')
export class Persona {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  surname: string;

  @Column()
  sexo: string;

  @Column()
  phone: string;

  @Column()
  email: string;

  @Column({ type: 'longblob' })
  image: string;

  @OneToMany(
    () => RegistroLlegada,
    (registroLlegada) => registroLlegada.persona,
  )
  registers: RegistroLlegada[];
}
