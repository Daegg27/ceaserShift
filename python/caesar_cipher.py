import re
def caesar_cipher(string, shift_amount):
    standard_alphabet = "abcdefghijklmnopqrstuvwxyz"
    capital_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    original_letter = ""
    shifted_letter = ""
    word_to_list = []
    string_to_number = int(shift_amount)
    
    for x in range(0, len(string)):
        print(string[x])
        if re.match("[^a-zA-Z]", string[x]):
            word_to_list.append(string[x])
            continue
        original_letter = standard_alphabet.find(string[x])
        if original_letter == -1:
            original_letter = capital_alphabet.find(string[x])
        
        new_number_calculator = original_letter + string_to_number
        if new_number_calculator >= 26:
            new_number_calculator -= 26
        if new_number_calculator < 0:
            new_number_calculator += 26
        
        shifted_letter = standard_alphabet[new_number_calculator]
        if standard_alphabet.find(string[x]) == -1:
            shifted_letter = capital_alphabet[new_number_calculator]
        word_to_list.append(shifted_letter)
    finalResult = "".join(word_to_list)
    print(finalResult)
    return finalResult
