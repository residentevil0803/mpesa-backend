import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { SupplierCountAggregate } from './supplier-count-aggregate.output';
import { SupplierMinAggregate } from './supplier-min-aggregate.output';
import { SupplierMaxAggregate } from './supplier-max-aggregate.output';

@ObjectType()
export class SupplierGroupBy {

    @Field(() => String, {nullable:false})
    supplierId!: string;

    @Field(() => String, {nullable:false})
    vendorId!: string;

    @Field(() => SupplierCountAggregate, {nullable:true})
    _count?: SupplierCountAggregate;

    @Field(() => SupplierMinAggregate, {nullable:true})
    _min?: SupplierMinAggregate;

    @Field(() => SupplierMaxAggregate, {nullable:true})
    _max?: SupplierMaxAggregate;
}
