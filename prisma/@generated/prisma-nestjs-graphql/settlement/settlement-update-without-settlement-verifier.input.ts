import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { EnumTransactionMethodEnumFieldUpdateOperationsInput } from '../prisma/enum-transaction-method-enum-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { WalletUpdateOneRequiredWithoutSettlementInput } from '../wallet/wallet-update-one-required-without-settlement.input';
import { UserUpdateOneRequiredWithoutSettlementInput } from '../user/user-update-one-required-without-settlement.input';
import { WalletUpdateManyWithoutSettlementDefaultInput } from '../wallet/wallet-update-many-without-settlement-default.input';

@InputType()
export class SettlementUpdateWithoutSettlementVerifierInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    id?: StringFieldUpdateOperationsInput;

    @Field(() => EnumTransactionMethodEnumFieldUpdateOperationsInput, {nullable:true})
    type?: EnumTransactionMethodEnumFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bankAccount?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bankAccountName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bankBranch?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    bankName?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    phoneNumber?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableBoolFieldUpdateOperationsInput, {nullable:true})
    verified?: NullableBoolFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    paybill?: NullableStringFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    createdByAgent?: BoolFieldUpdateOperationsInput;

    @Field(() => WalletUpdateOneRequiredWithoutSettlementInput, {nullable:true})
    wallet?: WalletUpdateOneRequiredWithoutSettlementInput;

    @Field(() => UserUpdateOneRequiredWithoutSettlementInput, {nullable:true})
    settlementCreator?: UserUpdateOneRequiredWithoutSettlementInput;

    @Field(() => WalletUpdateManyWithoutSettlementDefaultInput, {nullable:true})
    Wallet?: WalletUpdateManyWithoutSettlementDefaultInput;
}
