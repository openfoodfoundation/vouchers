<?php

namespace App\Enums;

/**
 * Configure your API response messages here.
 */
enum ApiResponse: string
{
    case RESPONSE_DELETED                                               = 'Deleted';
    case RESPONSE_ERROR                                                 = 'Error';
    case RESPONSE_METHOD_NOT_ALLOWED                                    = 'Method Not Allowed';
    case RESPONSE_NOT_FOUND                                             = 'Not found';
    case RESPONSE_OK                                                    = 'OK';
    case RESPONSE_SAVED                                                 = 'Saved';
    case RESPONSE_TOKEN_NOT_ALLOWED_TO_DO_THIS                          = 'Token not allowed to do this.';
    case RESPONSE_AUTHORIZATION_SIGNATURE_INCORRECT                     = 'Incorrect authorization signature.';
    case RESPONSE_AUTHORIZATION_SIGNATURE_INCORRECT_JWT_HEADER_REQUIRED = 'JWT Authorization header required.';
    case RESPONSE_AUTHORIZATION_SIGNATURE_INCORRECT_IAT_CLAIM_REQUIRED  = 'IAT claim required.';
    case RESPONSE_AUTHORIZATION_SIGNATURE_INCORRECT_EXP_CLAIM_REQUIRED  = 'EXP claim required.';
    case RESPONSE_AUTHORIZATION_SIGNATURE_INCORRECT_IAT_EXPIRED         = 'IAT claim expired.';
    case RESPONSE_AUTHORIZATION_SIGNATURE_INCORRECT_IAT_EXP_TOO_LARGE   = 'IAT and EXP too far apart. Max diff: 1 minute.';
    case RESPONSE_AUTHORIZATION_SIGNATURE_INCORRECT_EXPIRED             = 'Token expired.';
    case RESPONSE_QUERY_FILTER_DISALLOWED                               = 'Query filter disallowed';
    case RESPONSE_UPDATED                                               = 'Updated';
}
