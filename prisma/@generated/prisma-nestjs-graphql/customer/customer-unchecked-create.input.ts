import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CustomerUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    customerId!: string;

    @Field(() => String, {nullable:false})
    vendorId!: string;
}
